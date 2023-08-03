import { css } from '@linaria/core'
import { ColorProperty, defaultColor } from './color'

export interface ShadowProperty {
  /**
   * @deprecated The BASE property will be deprecated, please use LAYER0~4 property instead
   */
  BASE?: string
  /**
   * @deprecated The DIALOG property will be deprecated, please use LAYER0~4 property instead
   */
  DIALOG?: string
  LAYER0?: string
  LAYER1?: string
  LAYER2?: string
  LAYER3?: string
  LAYER4?: string
  OUTLINE?: string
  OUTLINE_MARGIN?: string
}

export interface CreatedShadowTheme {
  /**
   * @deprecated The BASE property will be deprecated, please use LAYER0~4 property instead
   */
  BASE: string
  /**
   * @deprecated The DIALOG property will be deprecated, please use LAYER0~4 property instead
   */
  DIALOG: string
  LAYER0?: string
  LAYER1?: string
  LAYER2?: string
  LAYER3?: string
  LAYER4?: string
  OUTLINE: string
  OUTLINE_MARGIN: string
}

const createOutline = (color: string) => `0 0 0 2px white, 0 0 0 4px ${color}`
const defaultOutline = createOutline(defaultColor.OUTLINE)
const defaultOutlineMargin = '4px'

export const defaultShadow = {
  BASE: `${defaultColor.TRANSPARENCY_15} 0 0 4px 0`,
  DIALOG: `${defaultColor.TRANSPARENCY_30} 0 4px 10px 0`,
  LAYER0: 'none',
  LAYER1: `0 1px 2px 0 ${defaultColor.TRANSPARENCY_30}`,
  LAYER2: `0 2px 4px 1px ${defaultColor.TRANSPARENCY_30}`,
  LAYER3: `0 4px 8px 2px ${defaultColor.TRANSPARENCY_30}`,
  LAYER4: `0 8px 16px 4px ${defaultColor.TRANSPARENCY_30}`,
  OUTLINE: defaultOutline,
  OUTLINE_MARGIN: defaultOutlineMargin,
}

export const createShadow = (userShadow: ShadowProperty = {}, userColor: ColorProperty = {}) => {
  const outline = createOutline(userColor.OUTLINE || defaultColor.OUTLINE)
  const created: CreatedShadowTheme = Object.assign(
    {
      ...defaultShadow,
      OUTLINE: outline,
    },
    userShadow,
  )
  return created
}
