/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { FloatProperties } from '../patterns/float';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface FloatProps extends FloatProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FloatProperties > {}


export declare const Float: FunctionComponent<FloatProps>