/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { GridProperties } from '../patterns/grid';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface GridProps extends GridProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridProperties > {}


export declare const Grid: FunctionComponent<GridProps>