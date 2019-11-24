import Rectangle from "../rectangle";
import Circle from "../circular/circle";
import Point2D from "../../../point/point2D";

export default class RoundRectangle extends Rectangle {

    private roundRadius: number;

    constructor(location: Point2D, size: Point2D, roundRadius = 0){
        super(location, size);

        this.roundRadius = roundRadius;
    }

    get RoundRadius() {
        return this.roundRadius;
    }

    set RoundRadius(roundRadius) {
        this.roundRadius = roundRadius;
    }

    get Area() {
        return super.Area - Math.pow(this.RoundRadius, 2) * (4 - Math.PI);
    }

    get InnerRectangle() {
        var diameter = this.RoundRadius * 2;
        return new Rectangle(super.Location.clone().add(this.RoundRadius, this.RoundRadius), super.Size.clone().subtract(diameter, diameter));
    }

    contains(point: Point2D) {
        let center = this.Location.clone().add(this.Size.X / 2,  this.Size.Y / 2);

        center.subtractPoint(point);

        let xInner = (this.Size.X / 2) - this.RoundRadius;
        let yInner = (this.Size.Y / 2) - this.RoundRadius;

        return Math.pow(Math.abs(center.X) - xInner, 2) + Math.pow(Math.abs(center.Y) - yInner, 2) <= Math.pow(this.RoundRadius, 2);
    }
}