import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getBleedStyle } from '../patterns/bleed.mjs';
import { styled } from './factory.mjs';

export const Bleed = /* @__PURE__ */ forwardRef(function Bleed(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["inline","block"])

const styleProps = getBleedStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return h(styled.div, mergedProps)
})