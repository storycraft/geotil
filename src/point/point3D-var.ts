import { Point3D } from "..";

export default class Point3DVar extends Point3D {

    get X() {
        return super.X;
    }

    get Y() {
        return super.Y;
    }

    get Z() {
        return super.Z;
    }

    set X(x: number) {
        this.x = x;
    }

    set Y(y: number) {
        this.y = y;
    }

    set Z(z: number) {
        this.z = z;
    }

} 