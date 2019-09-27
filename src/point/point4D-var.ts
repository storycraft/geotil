import { Point4D } from "..";

export default class Point4DVar extends Point4D {

    get X() {
        return super.X;
    }

    get Y() {
        return super.Y;
    }

    get Z() {
        return super.Z;
    }

    get W() {
        return super.W;
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

    set W(w: number) {
        this.w = w;
    }

} 