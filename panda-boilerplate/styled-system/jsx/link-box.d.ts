/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { LinkBoxProperties } from '../patterns/link-box';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface LinkBoxProps extends LinkBoxProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof LinkBoxProperties > {}


export declare const LinkBox: FunctionComponent<LinkBoxProps>