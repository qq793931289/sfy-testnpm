// import * as c from 'demo.js';

// export default c;

// 对象
export enum RotationControlPointType {
    Hover = 'H',
    Normal = 'N',
    Drag = 'D',
    Background = 'B',
}

export interface CameraControlPointEvent {
    item: string;
    context: number;
}

