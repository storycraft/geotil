import Circular from "./primitive/circular/circular";
import HasRadius from "./primitive/circular/has-radius";
import Primitive from "./primitive/primitive";
import Quad from "./primitive/quad";
import Triangle from "./primitive/triangle";
import Circle from "./shape/2d/circular/circle";
import RoundRectangle from "./shape/2d/round/round-rectangle";
import Rectangle from "./shape/2d/rectangle";
import TriangleIsosceles from "./shape/2d/triangle-Isosceles";
import Sphere from "./shape/3d/circular/sphere";
import Box from "./shape/3d/box";
import HyperSphere from "./shape/4d/circular/hyper-sphere";
import Tesseract from "./shape/4d/tesseract";
import Point from "./point/point";
import Point2D from "./point/point2D";
import Point3D from "./point/point3D";
import Point4D from "./point/point4D";
import Line from "./line/line";
import LineAbstract from "./line/line-abstract";
import LineCurve from "./line/curve/line-curve";
import BezierCurve from "./line/curve/bezier-curve";
import Ellipse from "./shape/2d/circular/ellipse";
import MultiLine from "./line/multi-line";
import CardinalSpline from "./line/curve/cardinal-spline";
import MathUtil from "./util/math-util";

const structure = {

    'point': {
        'Point': Point,
        'Point2D': Point2D,
        'Point3D': Point3D,
        'Point4D': Point4D
    },

    'line': {
        'LineAbstract': LineAbstract,
        'Line': Line,
        'MultiLine': MultiLine,

        'curve': {
            'LineCurve': LineCurve,
            'BezierCurve': BezierCurve,
            'CardinalSpline': CardinalSpline
        }
    },

    'primitive': {
        'circular': {
            'Circular': Circular,
            'HasRadius': HasRadius
        },

        'Primitive': Primitive,
        'Quad': Quad,
        'Triangle': Triangle
    },
    
    'shape': {
        '2d': {
            'circular': {
                'Circle': Circle,
                'Ellipse': Ellipse
            },
            'round': {
                'RoundRectangle': RoundRectangle
            },

            'Rectangle': Rectangle,
            'TriangleIsosceles': TriangleIsosceles
        },
        '3d': {
            'circular': {
                'Sphere': Sphere
            },

            'Box': Box
        },
        '4d': {
            'circular': {
                'HyperSphere': HyperSphere
            },

            'Tesseract': Tesseract
        }
    },

    'util': {
        'MathUtil': MathUtil
    }
}

export default structure;

if (window)
    window.Geotil = structure;