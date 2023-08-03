import { AbstractSize, CharRelativeSize } from '../theme/spacing'

export type Gap = CharRelativeSize | AbstractSize
export type SeparateGap = {
  row: Gap
  column: Gap
}
