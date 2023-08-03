export interface RadiusProperty {
  s?: string
  m?: string
  l?: string
  full?: string
}

export interface CreatedRadiusTheme {
  s: string
  m: string
  l: string
  full: string
}

export const defaultRadius: CreatedRadiusTheme = {
  s: '4px',
  m: '6px',
  l: '8px',
  full: '10000px',
}

export const createRadius = (userRadius: RadiusProperty = {}) => {
  const created: CreatedRadiusTheme = Object.assign(defaultRadius, userRadius)
  return created
}
