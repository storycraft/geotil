import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";
import Line from "./line";
import Point from "../point/point";

export default class MultiLine<T extends Point> extends LineAbstract<T> {

    private lineList: Array<LineAbstract<T>>;

    constructor(lineList: Array<LineAbstract<T>>) {
        super();
        this.lineList = lineList;
    }

    get StartPoint() {
        return this.LineList.length > 0 ? this.LineList[0].StartPoint : <T> <any> new Point4D();
    }

    get EndPoint() {
        return this.LineList.length > 0 ? this.LineList[this.LineList.length - 1].EndPoint : <T> <any> new Point4D();
    }

    get LineList() {
        return this.lineList;
    }

    get SquareLength() {
        var length = 0;

        for (let line of this.LineList) {
            length += line.Length;    
        }

        return length * length;
    }

    get SquareLengthSum() {
        var length = 0;

        for (let line of this.LineList) {
            length += line.SquareLength;    
        }

        return length;
    }

    get Length() {
        var length = 0;

        for (let line of this.LineList) {
            length += line.Length;    
        }

        return length;
    }

    getLineIndexAt(progress: number) {
        if (this.LineList.length < 1)
            return -1;
            
        progress = Math.max(Math.min(progress, 1), 0);

        let addedLength = 0;

        let totalSqLength = this.SquareLengthSum;
        let goalLength = totalSqLength * progress;

        let listLength = this.LineList.length;
        for (let i = 0; i < listLength; i++) {
            let line = this.LineList[i];
            let targetSquareLength = line.SquareLength;

            if (addedLength <= goalLength && addedLength + targetSquareLength >= goalLength)
                return i;

            addedLength += targetSquareLength;
        }

        return -1;
    }

    getLineAt(progress: number) {
        if (this.LineList.length < 1)
            return null;

        let index = this.getLineIndexAt(progress);

        if (index == -1)
            return null;

        return this.LineList[index];
    }

    getClosestProgressFrom(point: T) {
        var minDistanceSquared = Infinity;
        var minPoint = null;
        var targetLine = null;

        var lengthToLine = 0;
        var totalLength = 0;

        for (let line of this.LineList) {
            let closestProgress = line.getClosestProgressFrom(point);

            let length = line.Length;

            if (closestProgress) {
                let linePoint = line.getPointAt(closestProgress);
                let distanceSquared = linePoint!.squareDistanceToPoint(point);
    
                if (minDistanceSquared >= distanceSquared) {
                    minPoint = linePoint;
                    targetLine = line;
                    minDistanceSquared = distanceSquared;
    
                    lengthToLine = totalLength + length * closestProgress;
                }
            }

            totalLength += length;
        }

        if (!minPoint) {
            return 0;
        }

        return lengthToLine / totalLength;
    }
    
    getClosestPointFrom(point: T) {
        var minDistanceSquared = Infinity;
        var minPoint = null;

        for (let line of this.LineList) {
            let linePoint = line.getClosestPointFrom(<T> point);

            if (linePoint) {
                let distanceSquared = linePoint.squareDistanceToPoint(point);

                if (minDistanceSquared >= distanceSquared) {
                    minPoint = linePoint;
                    minDistanceSquared = distanceSquared;
                }
            }
        }

        return minPoint;
    }

    getPointAt(progress: number, uniformed: boolean = false): T | null {
        if (this.LineList.length < 1)
            return <T> <any> new Point4D();

        let length = this.Length;

        let goalLength = length * Math.max(Math.min(progress, 1), 0);
        let addedLength = 0;
        let targetLength = 0;
        let targetLine: LineAbstract<T> | null = null;

        for (var line of this.LineList) {
            targetLength = line.Length;

            if (addedLength <= goalLength && addedLength + targetLength >= goalLength) {
                targetLine = line;
                break;
            }

            addedLength += targetLength;
        }

        if (!targetLine) {
            return null;
        }

        let lineProgress = (goalLength - addedLength) / targetLength;

        return (uniformed && targetLine instanceof MultiLine) ? (<MultiLine<T>> targetLine).getPointAtUnUniformed(lineProgress) : targetLine.getPointAt(lineProgress);
    }

    getPointAtUnUniformed(progress: number): T {
        return this.getPointAt(progress, true) || <T> <any> new Point4D();
    }
}