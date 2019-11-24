import Box from "../3d/box";
import Point4D from "../../point/point4D";

export default class Tesseract extends Box {

    constructor(location: Point4D, size: Point4D) {
        super(location, size);
    }

    get Location() {
        return super.Location as Point4D;
    }

    get Size() {
        return super.Size as Point4D;
    }

    get HyperVolume(){
        return super.Area * (this.Size.W || 0);
    }

    get BoundingBox() {
        return new Tesseract(this.Location, this.Size);
    }

    contains(point: Point4D){
        let location = this.Location;
        let size = this.Size;

        return super.contains(point) && point.W <= location.W + size.W && point.W >= location.W;
    }
}