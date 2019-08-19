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
        point = Point4D.copy(point);

        let startToPoint = point.subtractPoint(this.StartPoint);
        let startToEnd = this.EndPoint.subtractPoint(this.StartPoint);
        let squareLength = this.SquareLength;

        let m = Point4D.copy(startToEnd.multiplyPoint(startToPoint));

        return Math.max(Math.min((m.X + m.Y + m.Z + m.W) / squareLength, 1), 0);
    }
    
    getClosestPointFrom(point: T) {
        return this.getPointAt(this.getClosestProgressFrom(point));
    }

    getPointAt(progress: number) {
        let startPoint = Point4D.copy(this.StartPoint);
        let endPoint = Point4D.copy(this.EndPoint);

        let point = new Point4D(MathUtil.lerp(startPoint.X, endPoint.X, progress), MathUtil.lerp(startPoint.Y, endPoint.Y, progress), MathUtil.lerp(startPoint.Z, endPoint.Z, progress), MathUtil.lerp(startPoint.W, endPoint.W, progress));

        return <T> <any> point;
    }
}