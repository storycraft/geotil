import Point4D from "../point/point4D";

export default class Line {
    constructor(startPoint, endPoint) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    get StartPoint() {
        return this.startPoint;
    }

    get EndPoint() {
        return this.endPoint;
    }

    get SquareDistance() {
        return Point4D.copy(this.StartPoint).squareDistanceToPoint(this.EndPoint);
    }

    get Distance() {
        return Point4D.copy(this.StartPoint).distanceToPoint(this.EndPoint);
    }

    getPointAt(progress) {
        let startPoint = Point4D.copy(this.StartPoint);
        let endPoint = Point4D.copy(this.EndPoint);

        let pointX = startPoint.X + (endPoint)

        return startPoint.add((endPoint.X - startPoint.X) * progress, (endPoint.Y - startPoint.Y) * progress, (endPoint.Z - startPoint.Z) * progress, (endPoint.W - startPoint.W) * progress);
    }
}