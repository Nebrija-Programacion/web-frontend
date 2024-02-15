import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getVstackStyle } from '../patterns/vstack.mjs';
import { styled } from './factory.mjs';

export const VStack = /* @__PURE__ */ forwardRef(function VStack(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["justify","gap"])

const styleProps = getVstackStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return h(styled.div, mergedProps)
})