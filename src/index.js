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

export default {

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
                'Circle': Circle
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

    'point': {
        'Point': Point,
        'Point2D': Point2D,
        'Point3D': Point3D,
        'Point4D': Point4D
    },

    'line': {
        'Line': Line
    }
}