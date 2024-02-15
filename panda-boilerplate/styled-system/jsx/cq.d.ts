/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { CqProperties } from '../patterns/cq';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface CqProps extends CqProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof CqProperties > {}


export declare const Cq: FunctionComponent<CqProps>