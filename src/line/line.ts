import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";
import MathUtil from "../util/math-util";
import Point2D from "../point/point2D";
import Point from "../point/point";

export default class Line<T extends Point> extends LineAbstract<T> {

    private startPoint: T;
    private endPoint: T;

    constructor(startPoint: T, endPoint: T) {
        super();

        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    get StartPoint() {
        return this.startPoint;
    }

    get EndPoint() {
        return this.endPoint;
    }

    get SquareLength() {
        return this.StartPoint.squareDistanceToPoint(this.EndPoint);
    }

    get Length() {
        return this.StartPoint.distanceToPoint(this.EndPoint);
    }

    getClosestProgressFrom(point: Point) {
        let startToPoint = point.clone().subtractPoint(this.StartPoint);
        let startToEnd = this.EndPoint.clone().subtractPoint(this.StartPoint);
        let squareLength = this.SquareLength;

        let m = startToEnd.multiplyPoint(startToPoint);

        return Math.max(Math.min(m.PointSum / squareLength, 1), 0);
    }
    
    getClosestPointFrom(point: T) {
        return this.getPointAt(this.getClosestProgressFrom(point));
    }

    getPointAt(progress: number) {
        let startPoint = this.StartPoint;
        let endPoint = this.EndPoint;

        let point = startPoint.clone().addPoint(endPoint.clone().subtractPoint(startPoint).multiply(progress));

        return <T> point;
    }
}