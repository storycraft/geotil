import LineCurve from "./line-curve";
import Point4D from "../../point/point4D";
import MultiLine from "../multi-line";
import Point from "../../point/point";
import Line from "../line";

export default class CardinalSpline<T extends Point> extends LineCurve<T> {

    static readonly DIVISION: number = 75;

    private pointList: Array<T>;

    constructor(pointList: Array<T>) {
        super();

        this.pointList = pointList;
    }

    get PointList() {
        return this.pointList;
    }

    get SquareLength() {
        return this.toMultiLine().SquareLength;
    }

    get Length() {
        return this.toMultiLine().Length;
    }

    toMultiLine(division = CardinalSpline.DIVISION) {
        var lineList = [];

        if (this.PointLength > 1) {
            var lastPoint = this.StartPoint;
            for(let i = 1; i <= division; i += 1) {
                var point = this.getPointAtUnUniformed(i / division);
                lineList[i - 1] = (new Line(lastPoint, point));

                lastPoint = point;
            }
        }

        return new MultiLine(lineList);
    }

    getPointAt(progress: number) {
        if (this.PointLength < 4) 
            return <T> <any> new Point4D();

        progress = Math.max(Math.min(progress, 1), 0);

        /* TODO
        let lineConnected = new MultiLine(this.PointList);
        let lineIndex = lineConnected.getLineIndexAt(progress);

        let lastPoint = this.PointList[(lineIndex - 1) < 0 ? 0 : (lineIndex - 1)];
        let currentPoint = this.PointList[lineIndex];
        let nextPoint = this.PointList[(lineIndex >= lineConnected.PointLength) ? (lineConnected.PointLength - 1) : (lineIndex + 1)];*/

        return <T> <any> new Point4D();
    }

    getPointAtUnUniformed(progress: number) {
        return this.getPointAt(progress);
    }

    getClosestProgressFrom(point: Point): number | null {
        throw new Error("Method not implemented.");
    }

    getClosestPointFrom(point: Point): T | null {
        throw new Error("Method not implemented.");
    }
}