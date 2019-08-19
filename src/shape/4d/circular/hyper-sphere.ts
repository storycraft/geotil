import Sphere from "../../3d/circular/sphere";
import Point4D from "../../../point/point4D";
import Tesseract from "../tesseract";

export default class HyperSphere<T extends Point4D> extends Sphere<T> {

    constructor(centerPoint: T, radius: number) {
        super(centerPoint, radius);
    }

    get HyperVolume() {
        return (super.Area * super.Area) * 0.5;
    }
    
    get BoundingBox() {
        return new Tesseract<T>(<T> super.CenterPoint.subtract(super.Radius, super.Radius, super.Radius, super.Radius), <T> super.CenterPoint.add(super.Radius, super.Radius, super.Radius, super.Radius));
    }

    contains(point: T){
        return super.CenterPoint.squareDistanceToPoint(point) <= super.Radius * super.Radius;
    }
}