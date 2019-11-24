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

    set Z(z) {
        this.z = z;
    }

    squareDistanceTo(x = 0, y = 0, z = 0){
        let distanceZ = z - this.Z;

        return super.squareDistanceTo(x, y) + Math.pow(distanceZ, 2);
    }

    distanceTo(x = 0, y = 0, z = 0){
        return Math.sqrt(this.squareDistanceTo(x, y, z));
    }

    add(x = 0, y = 0, z = 0) {
        this.z += z;

        return super.add(x, y);
    }

    subtract(x = 0, y = 0, z = 0){
        this.z -= z;

        return super.subtract(x, y);
    }

    multiply(x = 1, y = 1, z = 1){
        this.z *= z;

        return super.multiply(x, y);
    }

    divide(x = 1, y = 1, z = 1){
        this.z /= z;

        return super.divide(x, y);
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

    clone(target: Point3D = new Point3D()) {
        target.z = this.z;

        return super.clone(target);
    }
}