/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { CenterProperties } from '../patterns/center';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface CenterProps extends CenterProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof CenterProperties > {}


export declare const Center: FunctionComponent<CenterProps>