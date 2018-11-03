import Point2D from "../point/point2D";

export default class Primitive {
    constructor(){

    }

    get Area(){
        return 0;
    }

    get BoundingBox() {
        return null;
    }

    contains(point){
        return false;
    }
}