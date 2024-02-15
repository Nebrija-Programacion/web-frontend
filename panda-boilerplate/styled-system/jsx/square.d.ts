/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { SquareProperties } from '../patterns/square';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface SquareProps extends SquareProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof SquareProperties > {}


export declare const Square: FunctionComponent<SquareProps>