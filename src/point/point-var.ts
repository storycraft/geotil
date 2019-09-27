import { Point } from "..";

export default class PointVar extends Point {

    get X() {
        return super.X;
    }

    set X(x: number) {
        this.x = x;
    }

} 