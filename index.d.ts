import React from 'react'
import { ViewProps } from 'react-native';

export type Point = {
    x: number,
    y: number
}

export type GraphProps = {
    data?: number[],
    width?: number,
    height?: number,
    padding?: number,
    sampling?: number,
    limit?: number,
    max?: number,
    min?: number,
  
    color?: string,
    stroke?: string,
    strokeWidth?: number,
    opacity?: number,
    fill?: string
}

export type Props =  GraphProps & { points?: Point, scaleY?: any, children?:React.ReactElement[] };

declare function Sparkline (props: Props): React.ReactElement;
declare namespace Sparkline {
    function Line ({ points, color, stroke, strokeWidth }: Props): React.ReactElement;
    function Band ({data, scaleY, padding, width, color, fill, opacity }: Props): React.ReactElement;
    function Fill ({ points, height, padding }: Props): React.ReactElement;
}
