import Point from "../point/point";

export default abstract class LineAbstract<T extends Point> {

    abstract get StartPoint(): T;

    abstract get EndPoint(): T;

    abstract get SquareLength(): number;

    abstract get Length(): number;

    abstract getClosestProgressFrom(point: Point): number | null;

    abstract getClosestPointFrom(point: Point): T | null;

    abstract getPointAt(progress: number): T | null;
}