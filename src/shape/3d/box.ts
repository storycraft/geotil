import Rectangle from "../2d/rectangle";
import Point3D from "../../point/point3D";

export default class Box extends Rectangle {

    constructor(location: Point3D, size: Point3D) {
        super(location, size);
    }

    get Location() {
        return super.Location as Point3D;
    }

    get Size() {
        return super.Size as Point3D;
    }

    get Volume(){
        return super.Area * (this.Size.Z || 0);
    }

    get BoundingBox() {
        return new Box(this.Location, this.Size);
    }

    contains(point: Point3D){
        let location = this.Location;
        let size = this.Size;

        return super.contains(point) && point.Z <= location.Z + size.Z && point.Z >= location.Z;
    }
}