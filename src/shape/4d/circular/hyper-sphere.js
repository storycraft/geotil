import Sphere from "../../3d/circular/sphere";
import Point4D from "../../../point/point4D";

export default class HyperSphere extends Sphere {
    constructor(centerPoint, radius) {
        super(centerPoint, radius);
    }

    get HyperVolume() {
        return (super.Area * super.Area) * 0.5;
    }
    
    get BoundingBox() {
        var centerPoint = Point4D.copy(super.CenterPoint);
        return new Box(centerPoint.subtract(super.Radius, super.Radius, super.Radius, super.Radius), centerPoint.add(super.Radius, super.Radius, super.Radius, super.Radius));
    }

    contains(point){
        return Point4D.copy(super.CenterPoint).squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}