/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { SpacerProperties } from '../patterns/spacer';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface SpacerProps extends SpacerProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SpacerProperties > {}


export declare const Spacer: FunctionComponent<SpacerProps>