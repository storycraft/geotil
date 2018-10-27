import Box from "../3d/box";
import Point4D from "../../point/point4D";

export default class Tesseract extends Box {
    constructor(location, size) {
        super(location, size);
    }

    get HyperVolume(){
        return super.Area() * (this.Size.W || 0);
    }

    get BoundingBox() {
        return new Box(this.Location, this.Size);
    }

    contains(point){
        point = Point4D.copy(point);

        let location = Point4D.copy(this.Location);
        let size = Point4D.copy(this.Size);

        return super.contains(point) && point.W <= location.W + size.W && point.W >= location.W;
    }
}