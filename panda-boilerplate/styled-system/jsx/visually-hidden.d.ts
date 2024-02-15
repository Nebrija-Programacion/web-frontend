/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface VisuallyHiddenProps extends VisuallyHiddenProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VisuallyHiddenProperties > {}


export declare const VisuallyHidden: FunctionComponent<VisuallyHiddenProps>