import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";
import Line from "./line";

export default class MultiLine extends LineAbstract { 
    constructor(lineList) {
        super();
        this.lineList = lineList;
    }

    get LineList() {
        return this.lineList;
    }

    get SquareLength() {
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

    getLineIndexAt(progress) {
        if (this.LineList.length < 1)
            return -1;
            
        progress = Math.max(Math.min(progress, 1), 0);

        let addedLength = 0;
        let targetLength = 0;

        let listLength = this.LineList.length;
        for (let i = 0; i < listLength; i++) {
            let line = this.LineList[i];

            targetLength = line.Length;

            if (addedLength <= goalLength && addedLength + targetLength >= goalLength)
                return i;

            addedLength += targetLength;
        }

        return -1;
    }

    getLineAt(progress) {
        if (this.LineList.length < 1)
            return null;

        let index = this.getLineIndexAt(progress);

        if (index == -1)
            return null;

        return this.LineList[index];
    }

    getClosestProgressFrom(point) {
        point = Point4D.copy(point);

        var minDistanceSquared = Infinity;
        var minLineLength = 0;
        var minLineDistance = 0;

        var addedLength = 0;
        var totalLength = 0;
        var stackedLength = 0;
        for (let line of this.LineList) {
            let currentLineDistance = line.getClosestProgressFrom(point);
            let lineLength = line.Length;

            if (minDistanceSquared >= distanceSquared) {
                minLineDistance = currentLineDistance;
                minLineLength = lineLength;
                minDistanceSquared = distanceSquared;

                addedLength += stackedLength;
                stackedLength = 0;
            }

            stackedLength += lineLength;
            totalLength += lineLength;
        }

        return (addedLength + (minLineDistance * minLineLength)) / totalLength;
    }
    
    getClosestPointFrom(point) {
        point = Point4D.copy(point);

        var minDistanceSquared = Infinity;
        var minPoint = null;

        for (let line of this.LineList) {
            let linePoint = line.getClosestPointFrom(point);
            let distanceSquared = linePoint.squareDistanceToPoint(point);

            if (minDistanceSquared >= distanceSquared) {
                minPoint = linePoint;
                minDistanceSquared = distanceSquared;
            }
        }

        return minPoint;
    }

    getPointAt(progress, uniformed) {
        if (this.LineList.length < 1)
            return new Point4D();

        let length = this.Length;

        let goalLength = length * Math.max(Math.min(progress, 1), 0);
        let addedLength = 0;
        let targetLength = 0;
        let targetLine = null;

        for (var line of this.LineList) {
            targetLength = line.Length;

            if (addedLength <= goalLength && addedLength + targetLength >= goalLength) {
                targetLine = line;
                break;
            }

            addedLength += targetLength;
        }

        let lineProgress = (goalLength - addedLength) / targetLength;

        return (uniformed && targetLine.getPointAtUnUniformed) ? targetLine.getPointAtUnUniformed(lineProgress) : targetLine.getPointAt(lineProgress);
    }

    getPointAtUnUniformed(progress) {
        return this.getPointAt(progress, true);
    }
}