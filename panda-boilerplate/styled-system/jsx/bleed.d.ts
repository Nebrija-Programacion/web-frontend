/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { BleedProperties } from '../patterns/bleed';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface BleedProps extends BleedProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BleedProperties > {}


export declare const Bleed: FunctionComponent<BleedProps>