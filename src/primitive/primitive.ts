import Point2D from "../point/point2D";
import Point from "../point/point";
import Rectangle from "../shape/2d/rectangle";

export default abstract class Primitive<T extends Point2D> {

    abstract get Area(): number;

    abstract get BoundingBox(): Rectangle<T>;

    abstract contains(point: T): boolean;
}