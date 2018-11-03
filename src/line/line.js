import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";

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

    get Slope() {
        let lengthX = this.EndPoint.X - this.StartPoint.X;
        let lengthY = this.EndPoint.Y - this.StartPoint.Y;

        return lengthY / lengthX;
    }

    distanceTo(point) {
        //TODO
    }

    squareDistanceTo(point) {
       //TODO 
    }

    getPointAt(progress) {
        let startPoint = Point4D.copy(this.StartPoint);
        let endPoint = Point4D.copy(this.EndPoint);

        return startPoint.add((endPoint.X - startPoint.X) * progress, (endPoint.Y - startPoint.Y) * progress, (endPoint.Z - startPoint.Z) * progress, (endPoint.W - startPoint.W) * progress);
    }
}