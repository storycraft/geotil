import Point from "./point";

export default class Point2D extends Point {

    static readonly ZERO = new Point2D(0, 0);

    protected y: number;

    constructor(x?: number, y?: number){
        super(x);
        this.y = y || 0;
    }

    get Y(){
        return this.y;
    }

    squareDistanceTo(x = 0, y = 0){
        let distanceY = y - this.Y;

        return super.squareDistanceTo(x) + Math.pow(distanceY, 2);
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

    addPoint(point: Point2D){
        return this.add(point.X, point.Y);
    }

    subtractPoint(point: Point2D){
        return this.subtract(point.X, point.Y);
    }

    multiplyPoint(point: Point2D){
        return this.multiply(point.X, point.Y);
    }

    dividePoint(point: Point2D){
        return this.divide(point.X, point.Y);
    }

    distanceToPoint(point: Point2D){
        return this.distanceTo(point.X, point.Y);
    }

    squareDistanceToPoint(point: Point2D){
        return this.squareDistanceTo(point.X, point.Y);
    }

    static copy<T extends Point>(point: T){
        return new Point2D(point.X, point instanceof Point2D ? point.Y : 0);
    }
}