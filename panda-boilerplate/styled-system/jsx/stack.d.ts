/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { StackProperties } from '../patterns/stack';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface StackProps extends StackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof StackProperties > {}


export declare const Stack: FunctionComponent<StackProps>