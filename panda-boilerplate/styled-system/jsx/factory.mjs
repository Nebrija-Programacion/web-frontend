import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import { useMemo } from 'preact/hooks'
import { defaultShouldForwardProp, composeShouldForwardProps, composeCvaFn, getDisplayName } from './factory-helper.mjs';
import { isCssProperty } from './is-valid-prop.mjs';
import { css, cx, cva } from '../css/index.mjs';
import { splitProps, normalizeHTMLProps } from '../helpers.mjs';

function styledFn(Dynamic, configOrCva = {}, options = {}) {
  const cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva)

  const forwardFn = options.shouldForwardProp || defaultShouldForwardProp
  const shouldForwardProp = (prop) => forwardFn(prop, cvaFn.variantKeys)

  const defaultProps = Object.assign(
    options.dataAttr && configOrCva.__name__ ? { 'data-recipe': configOrCva.__name__ } : {},
    options.defaultProps,
  )

  const __cvaFn__ = composeCvaFn(Dynamic.__cva__, cvaFn)
  const __shouldForwardProps__ = composeShouldForwardProps(Dynamic, shouldForwardProp)

  const StyledComponent = /* @__PURE__ */ forwardRef(function StyledComponent(props, ref) {
    const { as: Element = Dynamic.__base__ || Dynamic, children, ...restProps } = props


    const combinedProps = useMemo(() => Object.assign({}, defaultProps, restProps), [restProps])

    const [htmlProps, forwardedProps, variantProps, styleProps, elementProps] = useMemo(() => {
      return splitProps(combinedProps, normalizeHTMLProps.keys, __shouldForwardProps__, __cvaFn__.variantKeys, isCssProperty)
    }, [combinedProps])

    function recipeClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const compoundVariantStyles = __cvaFn__.__getCompoundVariantCss__?.(variantProps)
      return cx(__cvaFn__(variantProps, false), css(compoundVariantStyles, propStyles, cssStyles), combinedProps.class, combinedProps.className)
    }

    function cvaClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const cvaStyles = __cvaFn__.raw(variantProps)
      return cx(css(cvaStyles, propStyles, cssStyles), combinedProps.class, combinedProps.className)
    }

    const classes = configOrCva.__recipe__ ? recipeClass : cvaClass

    return h(Element, {
      ...forwardedProps,
      ...elementProps,
      ...normalizeHTMLProps(htmlProps),
      ref,
      className: classes()
    }, combinedProps.children ?? children)
  })

  const name = getDisplayName(Dynamic)

  StyledComponent.displayName = `styled.${name}`
  StyledComponent.__cva__ = __cvaFn__
  StyledComponent.__base__ = Dynamic
  StyledComponent.__shouldForwardProps__ = shouldForwardProp

  return StyledComponent
}

function createJsxFactory() {
  const cache = new Map()

  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el))
      }
      return cache.get(el)
    },
  })
}

export const styled = /* @__PURE__ */ createJsxFactory()