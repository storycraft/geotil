import Box from "../3d/box";
import Point4D from "../../point/point4D";

export default class Tesseract<T extends Point4D> extends Box<T> {

    constructor(location: T, size: T) {
        super(location, size);
    }

    get HyperVolume(){
        return super.Area * (this.Size.W || 0);
    }

    get BoundingBox() {
        return new Box(this.Location, this.Size);
    }

    contains(point: T){
        let location = Point4D.copy(this.Location);
        let size = Point4D.copy(this.Size);

        return super.contains(point) && point.W <= location.W + size.W && point.W >= location.W;
    }
}