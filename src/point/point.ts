export default class Point {

    private x: number;

    constructor(x?: number){
        this.x = x || 0;
    }

    get X(){
        return this.x;
    }

    squareDistanceTo(x = 0){
        let distanceX = x - this.X;

        return Math.pow(distanceX, 2);
    }

    distanceTo(x = 0){
        return this.X - x;
    }

    add(x = 0){
        return new Point(this.X + x);
    }

    subtract(x = 0){
        return new Point(this.X - x);
    }

    multiply(x = 1){
        return new Point(this.X * x);
    }

    divide(x = 1){
        return new Point(this.X / x);
    }

    addPoint(point: Point){
        return this.add(point.X);
    }

    subtractPoint(point: Point){
        return this.subtract(point.X);
    }

    multiplyPoint(point: Point){
        return this.multiply(point.X);
    }

    dividePoint(point: Point){
        return this.divide(point.X);
    }

    distanceToPoint(point: Point){
        return this.distanceTo(point.X);
    }

    squareDistanceToPoint(point: Point){
        return this.squareDistanceTo(point.X);
    }

    static copy<T extends Point>(point: T){
        return new Point(point.X);
    }
}