import Point3D from "./point3D";
import Point2D from "./point2D";
import Point from "./point";

export default class Point4D extends Point3D {

    static readonly ZERO = new Point4D(0, 0, 0, 0);

    protected w: number;

    constructor(x?: number, y?: number, z?: number, w?: number){
        super(x, y, z);
        this.w = w || 0;
    }

    get W(){
        return this.w;
    }

    squareDistanceTo(x = 0, y = 0, z = 0, w = 0){
        let distanceW = w - this.W;

        return super.squareDistanceTo(x, y, z) + Math.pow(distanceW, 2);
    }

    distanceTo(x = 0, y = 0, z = 0, w = 0){
        return Math.sqrt(this.squareDistanceTo(x, y, z, w));
    }

    add(x = 0, y = 0, z = 0, w = 0){
        return new Point4D(this.X + x, this.Y + y, this.Z + z, this.W + w);
    }

    subtract(x = 0, y = 0, z = 0, w = 0){
        return new Point4D(this.X - x, this.Y - y, this.Z - z, this.W - w);
    }

    multiply(x = 1, y = 1, z = 1, w = 1){
        return new Point4D(this.X * x, this.Y * y, this.Z * z, this.W * w);
    }

    divide(x = 1, y = 1, z = 1, w = 1){
        return new Point4D(this.X / x, this.Y / y, this.Z / z, this.W / w);
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

    static copy<T extends Point>(point: T){
        return new Point4D(point.X, point instanceof Point2D ? point.Y : 0, point instanceof Point3D ? point.Z : 0, point instanceof Point4D ? point.Z : 0);
    }
}