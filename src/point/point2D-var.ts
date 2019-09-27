import { Point2D } from "..";

export default class Point2DVar extends Point2D {

    get X() {
        return super.X;
    }

    get Y() {
        return super.Y;
    }

    set X(x: number) {
        this.x = x;
    }

    set Y(y: number) {
        this.y = y;
    }

} 