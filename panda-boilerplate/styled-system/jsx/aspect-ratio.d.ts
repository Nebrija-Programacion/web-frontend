/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { AspectRatioProperties } from '../patterns/aspect-ratio';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface AspectRatioProps extends AspectRatioProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AspectRatioProperties | 'aspectRatio'> {}


export declare const AspectRatio: FunctionComponent<AspectRatioProps>