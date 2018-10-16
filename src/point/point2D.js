import Point from "./point";

export default class Point2D extends Point {
    constructor(x, y){
        super(x);
        this.y = y || 0;
    }

    get Y(){
        return this.y;
    }

    set Y(y){
        this.y = y;
    }

    squareDistanceTo(x = 0, y = 0){
        let distanceX = x - this.X;
        let distanceY = y - this.Y;

        return Math.pow(distanceX, 2) + Math.pow(distanceY, 2);
    }

    distanceTo(x = 0, y = 0){
        return Math.sqrt(this.squareDistanceTo(x, y));
    }

    add(x = 0, y = 0){
        return new Point2D(this.X + x, this.Y + y);
    }

    subtract(x = 0, y = 0){
        return new Point2D(this.X - x, this.Y - y);
    }

    multiply(x = 1, y = 1){
        return new Point2D(this.X * x, this.Y * y);
    }

    divide(x = 1, y = 1){
        return new Point2D(this.X / x, this.Y / y);
    }

    addPoint(point){
        return this.add(point.X, point.Y);
    }

    subtractPoint(point){
        return this.subtract(point.X, point.Y);
    }

    multiplyPoint(point){
        return this.multiply(point.X, point.Y);
    }

    dividePoint(point){
        return this.divide(point.X, point.Y);
    }

    distanceToPoint(point){
        return this.distanceTo(point.X, point.Y);
    }

    squareDistanceToPoint(point){
        return this.squareDistanceTo(point.X, point.Y);
    }

    static copy(point){
        return new Point2D(point.X, point.Y);
    }
}