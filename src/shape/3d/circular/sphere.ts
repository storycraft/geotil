import Circle from "../../2d/circular/circle";
import Point3D from "../../../point/point3D";
import Box from "../box";
import Point4D from "../../../point/point4D";

export default class Sphere extends Circle {

    constructor(centerPoint: Point3D, radius: number) {
        super(centerPoint, radius);
    }
    
    get CenterPoint() {
        return super.CenterPoint as Point3D;
    }

    get Volume() {
        return super.Area * super.Radius * (4 / 3);
    }

    get BoundingBox() {
        return new Box(this.CenterPoint.clone().subtract(super.Radius), this.CenterPoint.clone().add(super.Radius));
    }

    contains(point: Point3D) {
        return this.CenterPoint.squareDistanceToPoint(point) <= Math.pow(super.Radius, 2);
    }
}