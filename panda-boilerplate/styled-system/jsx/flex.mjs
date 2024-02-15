import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getFlexStyle } from '../patterns/flex.mjs';
import { styled } from './factory.mjs';

export const Flex = /* @__PURE__ */ forwardRef(function Flex(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["align","justify","direction","wrap","basis","grow","shrink"])

const styleProps = getFlexStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return h(styled.div, mergedProps)
})