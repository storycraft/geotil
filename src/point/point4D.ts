import Point3D from "./point3D";

export default class Point4D extends Point3D {

    static get ZERO() {
        return new Point4D(0, 0, 0, 0);
    }

    protected w: number;

    constructor(x?: number, y?: number, z?: number, w?: number){
        super(x, y, z);
        this.w = w || 0;
    }

    get W() {
        return this.w;
    }

    set W(w) {
        this.W = w;
    }

    get PointSum() {
        return this.x + this.y + this.z + this.w;
    }

    squareDistanceTo(x = 0, y = 0, z = 0, w = 0){
        let distanceW = w - this.W;

        return super.squareDistanceTo(x, y, z) + Math.pow(distanceW, 2);
    }

    distanceTo(x = 0, y = x, z = y, w = z){
        return Math.sqrt(this.squareDistanceTo(x, y, z, w));
    }

    add(x = 0, y = x, z = y, w = z) {
        this.w += w;

        return super.add(x, y, z);
    }

    subtract(x = 0, y = x, z = y, w = z){
         this.w -= w;
        
        return super.subtract(x, y, z);
    }

    multiply(x = 1, y = x, z = y, w = z){
        this.w *= w;
        
        return super.multiply(x, y, z);
    }

    divide(x = 1, y = x, z = y, w = z){
        this.w /= w;
        
        return super.divide(x, y, z);
    }

    addPoint(point: Point4D){
        return this.add(point.X, point.Y, point.Z, point.W);
    }

    subtractPoint(point: Point4D){
        return this.subtract(point.X, point.Y, point.Z, point.W);
    }

    multiplyPoint(point: Point4D){
        return this.multiply(point.X, point.Y, point.Z, point.W);
    }

    dividePoint(point: Point4D){
        return this.divide(point.X, point.Y, point.Z, point.W);
    }

    distanceToPoint(point: Point4D){
        return this.distanceTo(point.X, point.Y, point.Z, point.W);
    }

    squareDistanceToPoint(point: Point4D){
        return this.squareDistanceTo(point.X, point.Y, point.Z, point.W);
    }

    createNew() {
        return new Point4D();
    }

    clone(target: Point4D = this.createNew()) {
        target.w = this.w;

        return <Point4D> super.clone(target);
    }
}