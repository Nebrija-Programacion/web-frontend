/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { FlexProperties } from '../patterns/flex';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface FlexProps extends FlexProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexProperties > {}


export declare const Flex: FunctionComponent<FlexProps>