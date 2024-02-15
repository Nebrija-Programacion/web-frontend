/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { HstackProperties } from '../patterns/hstack';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface HstackProps extends HstackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HstackProperties > {}


export declare const HStack: FunctionComponent<HstackProps>