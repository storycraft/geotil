import Circle from "../../2d/circular/circle";
import Point3D from "../../../point/point3D";
import Box from "../box";
import Point4D from "../../../point/point4D";

export default class Sphere<T extends Point3D> extends Circle<T> {

    constructor(centerPoint: T, radius: number) {
        super(centerPoint, radius);
    }

    get Volume() {
        return super.Area * super.Radius * (4 / 3);
    }

    get BoundingBox() {
        return new Box<T>(<T> <any> Point4D.copy(this.CenterPoint.subtract(super.Radius, super.Radius, super.Radius)), <T> <any> Point4D.copy(this.CenterPoint.add(super.Radius, super.Radius, super.Radius)));
    }

    contains(point: T){
        return this.CenterPoint.squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}