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
        let outerVerticalSize = new Point2D(this.RoundRadius, this.Size.Y - this.RoundRadius * 2);
        let outerHorizontalSize = new Point2D(this.Size.X - this.RoundRadius * 2, this.RoundRadius);

        let topOuterRectangle = new Rectangle(super.Location.add(this.RoundRadius), outerHorizontalSize);
        let bottomOuterRectangle = new Rectangle(super.Location.add(this.RoundRadius, this.Size.X - this.RoundRadius), outerHorizontalSize);
        let leftOuterRectangle = new Rectangle(super.Location.add(0, this.RoundRadius), outerVerticalSize);
        let rightOuterRectangle = new Rectangle(super.Location.add(this.Size.X - this.RoundRadius, this.RoundRadius), outerVerticalSize);

        let topLeftOuterCircle = new Circle(super.Location.add(this.RoundRadius, this.RoundRadius), this.RoundRadius);
        let topRightOuterCircle = new Circle(super.Location.add(this.Size.X - this.RoundRadius, this.RoundRadius), this.RoundRadius);
        let bottomLeftOuterCircle = new Circle(super.Location.add(this.RoundRadius, this.Size.Y - this.RoundRadius), this.RoundRadius);
        let bottomRightOuterCircle = new Circle(super.Location.add(this.Size.X - this.RoundRadius, this.Size.Y - this.RoundRadius), this.RoundRadius);

        return this.InnerRectangle.contains(point)
         || topOuterRectangle.contains(point) || bottomOuterRectangle.contains(point) || leftOuterRectangle.contains(point) || rightOuterRectangle.contains(point)
         || topLeftOuterCircle.contains(point) || topRightOuterCircle.contains(point) || bottomLeftOuterCircle.contains(point) || bottomRightOuterCircle.contains(point);
    }
}