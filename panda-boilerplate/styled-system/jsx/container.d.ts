/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { ContainerProperties } from '../patterns/container';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface ContainerProps extends ContainerProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ContainerProperties > {}


export declare const Container: FunctionComponent<ContainerProps>