import Rectangle from "../rectangle";
import Point2D from "../../point/point2D";
import Circle from "../circular/circle";

export default class RoundRectangle extends Rectangle {
    constructor(location, size, roundRadius = 0){
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
        return new Rectangle(super.Location.add(this.RoundRadius, this.RoundRadius, this.RoundRadius, this.RoundRadius), super.Size.subtract(diameter, diameter, diameter, diameter));
    }

    contains(point){
        let verticalRectangle = new Rectangle(super.Location.add(this.RoundRadius), this.Size.subtract(this.RoundRadius * 2, 0));
        let horizontalRectangle = new Rectangle(super.Location.add(0, this.RoundRadius), this.Size.subtract(0, this.RoundRadius * 2));

        let topLeftOuterCircle = new Circle(super.Location.add(this.RoundRadius, this.RoundRadius), this.RoundRadius);
        let topRightOuterCircle = new Circle(super.Location.add(this.Size.X - this.RoundRadius, this.RoundRadius), this.RoundRadius);
        let bottomLeftOuterCircle = new Circle(super.Location.add(this.RoundRadius, this.Size.Y - this.RoundRadius), this.RoundRadius);
        let bottomRightOuterCircle = new Circle(super.Location.add(this.Size.X - this.RoundRadius, this.Size.Y - this.RoundRadius), this.RoundRadius);

        return this.InnerRectangle.contains(point)
         || verticalRectangle.contains(point) || horizontalRectangle.contains(point)
         || topLeftOuterCircle.contains(point) || topRightOuterCircle.contains(point) || bottomLeftOuterCircle.contains(point) || bottomRightOuterCircle.contains(point);
    }
}