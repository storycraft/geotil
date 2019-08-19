import Rectangle from "../2d/rectangle";
import Point3D from "../../point/point3D";

export default class Box<T extends Point3D> extends Rectangle<T> {

    constructor(location: T, size: T) {
        super(location, size);
    }

    get Volume(){
        return super.Area * (this.Size.Z || 0);
    }

    get BoundingBox() {
        return new Box(this.Location, this.Size);
    }

    contains(point: T){
        let location = Point3D.copy(this.Location);
        let size = Point3D.copy(this.Size);

        return super.contains(point) && point.Z <= location.Z + size.Z && point.Z >= location.Z;
    }
}