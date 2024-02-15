import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs';
import { styled } from './factory.mjs';

export const VisuallyHidden = /* @__PURE__ */ forwardRef(function VisuallyHidden(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getVisuallyHiddenStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return h(styled.div, mergedProps)
})