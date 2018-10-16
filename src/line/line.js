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
        return this.Point1.squareDistanceToPoint(this.Point2);
    }

    get Distance() {
        return this.Point1.distanceToPoint(this.Point2);
    }
}