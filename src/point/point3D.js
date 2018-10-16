import Point2D from "./point2D";

export default class Point3D extends Point2D {
    constructor(x, y, z){
        super(x, y);
        this.z = z || 0;
    }

    get Z(){
        return this.z;
    }

    set Z(z){
        this.z = z;
    }

    squareDistanceTo(x = 0, y = 0, z = 0){
        let distanceX = x - this.X;
        let distanceY = y - this.Y;
        let distanceZ = z - this.Z;

        return Math.pow(distanceX, 2) + Math.pow(distanceY, 2) + Math.pow(distanceZ, 2);
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

    addPoint(point){
        return this.add(point.X, point.Y, point.Z);
    }

    subtractPoint(point){
        return this.subtract(point.X, point.Y, point.Z);
    }

    multiplyPoint(point){
        return this.multiply(point.X, point.Y, point.Z);
    }

    dividePoint(point){
        return this.divide(point.X, point.Y, point.Z);
    }

    distanceToPoint(point){
        return this.distanceTo(point.X, point.Y, point.Z);
    }

    squareDistanceToPoint(point){
        return this.squareDistanceTo(point.X, point.Y, point.Z);
    }

    static copy(point){
        return new Point3D(point.X, point.Y, point.Z);
    }
}