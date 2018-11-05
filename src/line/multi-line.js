import Point4D from "../point/point4D";
import LineAbstract from "./line-abstract";

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

        for (var line of this.LineList) {
            length += line.SquareLength;    
        }

        return length;
    }

    get Length() {
        var length = 0;

        for (var line of this.LineList) {
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