import Sphere from "../../3d/circular/sphere";
import Point4D from "../../../point/point4D";
import Tesseract from "../tesseract";

export default class HyperSphere extends Sphere {

    constructor(centerPoint: Point4D, radius: number) {
        super(centerPoint, radius);
    }

    get CenterPoint() {
        return super.CenterPoint as Point4D;
    }

    get HyperVolume() {
        return (super.Area * super.Area) * 0.5;
    }
    
    get BoundingBox() {
        return new Tesseract(this.CenterPoint.clone().subtract(super.Radius), this.CenterPoint.clone().add(super.Radius));
    }

    contains(point: Point4D) {
        return super.CenterPoint.squareDistanceToPoint(point) <= Math.pow(super.Radius, 2);
    }
}