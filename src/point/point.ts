export default class Point {

    static readonly ZERO = new Point(0);

    protected x: number;

    constructor(x?: number){
        this.x = x || 0;
    }

    get X() {
        return this.x;
    }

    set X(x) {
        this.x = x;
    }

    get PointSum() {
        return this.x;
    }

    squareDistanceTo(x = 0) {
        let distanceX = x - this.X;

        return Math.pow(distanceX, 2);
    }

    distanceTo(x = 0) {
        return this.X - x;
    }

    add(x = 0) {
        this.x += x;

        return this;
    }

    subtract(x = 0) {
        this.x -= x;

        return this;
    }

    multiply(x = 1) {
        this.x *= x;

        return this;
    }

    divide(x = 1) {
        this.x /= x;

        return this;
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

    createNew() {
        return new Point();
    }

    clone(target: Point = this.createNew()) {
        target.x = this.x;

        return target;
    }
}