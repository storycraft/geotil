import Circle from "../../2d/circular/circle";
import Point3D from "../../../point/point3D";
import Box from "../box";

export default class Sphere extends Circle { 
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get Volume() {
        return super.Area * super.Radius * (4 / 3);
    }

    get BoundingBox() {
        var centerPoint = Point3D.copy(super.CenterPoint);
        return new Box(centerPoint.subtract(super.Radius, super.Radius, super.Radius), centerPoint.add(super.Radius, super.Radius, super.Radius));
    }

    contains(point){
        return Point3D.copy(super.CenterPoint).squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}