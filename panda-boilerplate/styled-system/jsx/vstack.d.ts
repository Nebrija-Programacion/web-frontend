/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { VstackProperties } from '../patterns/vstack';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface VstackProps extends VstackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VstackProperties > {}


export declare const VStack: FunctionComponent<VstackProps>