import Circle from "../../2d/circular/circle";
import Point3D from "../../../point/point3D";

export default class Sphere extends Circle { 
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get Volume() {
        return super.Area * super.Radius * (4 / 3);
    }

    contains(point){
        return Point3D.copy(super.CenterPoint).squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}