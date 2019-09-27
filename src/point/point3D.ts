import Point2D from "./point2D";
import Point from "./point";

export default class Point3D extends Point2D {

    static readonly ZERO = new Point3D(0, 0, 0);

    protected z: number;

    constructor(x?: number, y?: number, z?: number){
        super(x, y);
        this.z = z || 0;
    }

    get Z(){
        return this.z;
    }

    squareDistanceTo(x = 0, y = 0, z = 0){
        let distanceZ = z - this.Z;

        return super.squareDistanceTo(x, y) + Math.pow(distanceZ, 2);
    }

    distanceTo(x = 0, y = 0, z = 0){
        return Math.sqrt(this.squareDistanceTo(x, y, z));
    }

    add(x = 0, y = 0, z = 0){
        return new Point3D(this.X + x, this.Y + y, this.Z + z);
    }

    subtract(x = 0, y = 0, z = 0){
        return new Point3D(this.X - x, this.Y - y, this.Z - z);
    }

    multiply(x = 1, y = 1, z = 1){
        return new Point3D(this.X * x, this.Y * y, this.Z * z);
    }

    divide(x = 1, y = 1, z = 1){
        return new Point3D(this.X / x, this.Y / y, this.Z / z);
    }

    addPoint(point: Point3D){
        return this.add(point.X, point.Y, point.Z);
    }

    subtractPoint(point: Point3D){
        return this.subtract(point.X, point.Y, point.Z);
    }

    multiplyPoint(point: Point3D){
        return this.multiply(point.X, point.Y, point.Z);
    }

    dividePoint(point: Point3D){
        return this.divide(point.X, point.Y, point.Z);
    }

    distanceToPoint(point: Point3D){
        return this.distanceTo(point.X, point.Y, point.Z);
    }

    squareDistanceToPoint(point: Point3D){
        return this.squareDistanceTo(point.X, point.Y, point.Z);
    }

    static copy<T extends Point>(point: T){
        return new Point3D(point.X, point instanceof Point2D ? point.Y : 0, point instanceof Point3D ? point.Y : 0);
    }
}