import LineCurve from "./line-curve";
import Point4D from "../../point/point4D";
import MultiLine from "../multi-line";

export default class CardinalSpline extends LineCurve {
    constructor(pointList) {
        super(pointList);
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

    getPointAt(progress) {
        if (this.PointLength < 4) 
            return new Point4D();

        progress = Math.max(Math.min(progress, 1), 0);

        let lineConnected = new MultiLine(this.PointList);
        let lineIndex = lineConnected.getLineIndexAt(progress);

        let lastPoint = this.PointList[(lineIndex - 1) < 0 ? 0 : (lineIndex - 1)];
        let currentPoint = this.PointList[lineIndex];
        let nextPoint = this.PointList[(lineIndex >= lineConnected.PointLength) ? (lineConnected.PointLength - 1) : (lineIndex + 1)];

        

    }

    getPointAtUnUniformed(progress) {
        return this.getPointAt(progress);
    }
}

CardinalSpline.DIVISION = 75;