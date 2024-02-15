/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { BoxProperties } from '../patterns/box';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface BoxProps extends BoxProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxProperties > {}


export declare const Box: FunctionComponent<BoxProps>