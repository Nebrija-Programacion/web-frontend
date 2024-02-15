/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { WrapProperties } from '../patterns/wrap';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface WrapProps extends WrapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof WrapProperties > {}


export declare const Wrap: FunctionComponent<WrapProps>