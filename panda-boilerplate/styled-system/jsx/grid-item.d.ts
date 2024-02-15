/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { GridItemProperties } from '../patterns/grid-item';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface GridItemProps extends GridItemProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridItemProperties > {}


export declare const GridItem: FunctionComponent<GridItemProps>