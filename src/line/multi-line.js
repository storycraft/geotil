import Point4D from "../point/point4D";

export default class MultiLine { 
    constructor(...lineList) {
        this.lineList = lineList;
    }

    get LineList() {
        return this.lineList;
    }

    get Length() {
        var length = 0;

        for (var line of this.LineList) {
            length += line.Length;    
        }

        return length;
    }

    getPointAt(progress) {
        if (this.LineList.length < 1)
            return new Point4D(0, 0, 0, 0);

        progress = Math.max(Math.min(progress, 1), 0);

        let length = this.Length;

        let a = length * progress;
        let b = 0;
        let targetLength = 0;
        let targetLine = null;
        for (var line of this.LineList) {
            targetLength = line.Length;

            if (b < a && b + targetLength > a) {
                targetLine = line;
                break;
            }

            b += line.Length;
        }

        return targetLine.getPointAt((progress - (b / length)) / (targetLength / length));
    }

    getPointAtWithoutRatio(progress) {
        if (this.LineList.length < 1)
            return new Point4D(0, 0, 0, 0);

        let section = 1 / this.LineList.length;

        let targetLine = this.LineList[Math.floor(progress * this.LineList.length)];

        return targetLine.getPointAt((progress % section) / section);
    }
}