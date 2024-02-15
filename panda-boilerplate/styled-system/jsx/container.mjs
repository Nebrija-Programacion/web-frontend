import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { mergeCss } from '../css/css.mjs';
import { splitProps } from '../helpers.mjs';
import { getContainerStyle } from '../patterns/container.mjs';
import { styled } from './factory.mjs';

export const Container = /* @__PURE__ */ forwardRef(function Container(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContainerStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return h(styled.div, mergedProps)
})