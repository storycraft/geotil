import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";
import MathUtil from "../util/math-util";

export default class Line extends LineAbstract {
    constructor(startPoint, endPoint) {
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
        return Point4D.copy(this.StartPoint).squareDistanceToPoint(this.EndPoint);
    }

    get Length() {
        return Point4D.copy(this.StartPoint).distanceToPoint(this.EndPoint);
    }

    getPointAt(progress) {
        let startPoint = Point4D.copy(this.StartPoint);
        let endPoint = Point4D.copy(this.EndPoint);

        return new Point4D(MathUtil.lerp(startPoint.X, endPoint.X, progress), MathUtil.lerp(startPoint.Y, endPoint.Y, progress), MathUtil.lerp(startPoint.Z, endPoint.Z, progress), MathUtil.lerp(startPoint.W, endPoint.W, progress));
    }
}