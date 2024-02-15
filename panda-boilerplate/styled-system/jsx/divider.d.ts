/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { DividerProperties } from '../patterns/divider';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface DividerProps extends DividerProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DividerProperties > {}


export declare const Divider: FunctionComponent<DividerProps>