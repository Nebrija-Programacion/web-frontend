import { Signal } from '@preact/signals';

export const page = new Signal<number>(1);
export const search = new Signal<string>("");