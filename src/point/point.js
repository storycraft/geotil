export default class Point {
    constructor(x){
        this.x = x || 0;
    }

    get X(){
        return this.x;
    }

    set X(x){
        this.x = x;
    }

    squareDistanceTo(x = 0){
        let distanceX = x - this.X;

        return Math.pow(distanceX, 2);
    }

    distanceTo(x = 0){
        return point.X - x;
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

    addPoint(point){
        return this.add(point.X);
    }

    subtractPoint(point){
        return this.subtract(point.X);
    }

    multiplyPoint(point){
        return this.multiply(point.X);
    }

    dividePoint(point){
        return this.divide(point.X);
    }

    distanceToPoint(point){
        return this.distanceTo(point.X);
    }

    squareDistanceToPoint(point){
        return this.squareDistanceTo(point.X, point.Y);
    }

    static copy(point){
        return new Point(point.X);
    }
}