import Rectangle from "../shape/2d/rectangle";
import Point2D from "../point/point2D";

export default class Primitive {
    constructor(){

    }

    get Area(){
        return 0;
    }

    get BoundingBox() {
        return new Rectangle(new Point2D(0, 0), new Point2D(0, 0));
    }

    contains(point){
        return false;
    }
}