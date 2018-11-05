import Point3D from "./point3D";

export default class Point4D extends Point3D {
    constructor(x, y, z, w){
        super(x, y, z);
        this.w = w || 0;
    }

    get W(){
        return this.w;
    }

    set W(w){
        this.w = w;
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

    addPoint(point){
        return this.add(point.X, point.Y, point.Z, point.W);
    }

    subtractPoint(point){
        return this.subtract(point.X, point.Y, point.Z, point.W);
    }

    multiplyPoint(point){
        return this.multiply(point.X, point.Y, point.Z, point.W);
    }

    dividePoint(point){
        return this.divide(point.X, point.Y, point.Z, point.W);
    }

    distanceToPoint(point){
        return this.distanceTo(point.X, point.Y, point.Z, point.W);
    }

    squareDistanceToPoint(point){
        return this.squareDistanceTo(point.X, point.Y, point.Z, point.W);
    }

    static copy(point){
        return new Point4D(point.X, point.Y, point.Z, point.W);
    }
}