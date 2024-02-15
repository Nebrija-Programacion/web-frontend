/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { CircleProperties } from '../patterns/circle';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface CircleProps extends CircleProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof CircleProperties > {}


export declare const Circle: FunctionComponent<CircleProps>