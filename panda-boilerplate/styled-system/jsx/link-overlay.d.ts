/* eslint-disable */
import type { FunctionComponent } from 'preact'
import type { LinkOverlayProperties } from '../patterns/link-overlay';
import type { DistributiveOmit } from '../types/system-types';
import type { HTMLStyledProps } from '../types/jsx';

export interface LinkOverlayProps extends LinkOverlayProperties, DistributiveOmit<HTMLStyledProps<'a'>, keyof LinkOverlayProperties > {}


export declare const LinkOverlay: FunctionComponent<LinkOverlayProps>