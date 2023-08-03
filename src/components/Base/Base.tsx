import { HTMLAttributes, PropsWithChildren, forwardRef, useMemo } from 'react'
import type { Gap } from '../../types/gap'
import { CSSProperties } from '@linaria/core'
import { theme } from '@/theme'
import { styled } from '@linaria/react'
import { AbstractSize, CharRelativeSize } from '@/theme/spacing'

type Props = PropsWithChildren<{
  padding?: Gap | SeparatePadding
  radius?: 's' | 'm'
  overflow?:
    | CSSProperties['overflow']
    | { x: CSSProperties['overflowX']; y: CSSProperties['overflowY'] }
  layer?: LayerKeys
}>

export type LayerKeys = keyof typeof layerMap

export const layerMap = {
  0: 'LAYER0',
  1: 'LAYER1',
  2: 'LAYER2',
  3: 'LAYER3',
  4: 'LAYER4',
} as const

type SeparatePadding = {
  block?: Gap
  inline?: Gap
}

export type ElementProps = Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const separatePadding = (padding: Props['padding']) => {
  if (padding instanceof Object) {
    return {
      block: padding.block,
      inline: padding.inline,
    }
  }

  return {
    block: padding,
    inline: padding,
  }
}

const getSpacing = (size: CharRelativeSize | AbstractSize) => {
  const { spacing, spacingByChar } = theme

  if (typeof size === 'number') {
    return spacingByChar(size)
  } else if (typeof size === 'string') {
    return spacing[size]
  } else {
    // not going through
    return '0'
  }
}

export const Base = forwardRef<HTMLDivElement, Props & ElementProps>(
  ({ padding, radius = 'm', overflow, layer = 1, className = '', ...props }, ref) => {
    const $padding = separatePadding(padding)
    const $radius = useMemo(() => {
      switch (radius) {
        case 's':
          return theme.radius.m
        case 'm':
          return theme.radius.l
      }
    }, [radius])

    const style: any = Object.assign(
      {
        borderRadius: $radius,
        boxShadow: theme.shadow[layerMap[layer]],
      },
      overflow && overflow instanceof Object ? { overflowX: overflow.x, overflowY: overflow.y } : {},
      overflow && !(overflow instanceof Object) ? { overflow } : {},
      $padding.block ? { paddingBlock: getSpacing($padding.block) } : {},
      $padding.inline ? { paddingInline: getSpacing($padding.inline) } : {},
    )

    return (
      <Wrapper
        {...props}
        style={style}
        className={className}
        ref={ref}
      />
    )
  },
)

Base.displayName = 'Base'

const Wrapper = styled.div`
  background-color: ${theme.color.WHITE};

  @media (prefers-contrast: more) {
    & {
      border: ${theme.border.highContrast};
    }
  }
`
