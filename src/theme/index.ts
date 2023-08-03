import { createBorder } from "./border";
import { createColor } from "./color";
import { createFontSize } from "./fontSize";
import { createRadius } from "./radius";
import { createShadow } from "./shadow";
import { createSpacing, createSpacingByChar } from "./spacing";

export const theme = {
  color: createColor(),
  spacing: createSpacing(),
  spacingByChar: createSpacingByChar(),
  fontSize: createFontSize(),
  border: createBorder(),
  radius: createRadius(),
  shadow: createShadow(),
}
