import { css } from "@emotion/react";

//export reusable css
export const pixelBorderWidth = '4px';

export const cssPixelBorder = (color) => css`
  border-style: solid;
  border-width: ${pixelBorderWidth};
  border-color: ${color};
  border-image-slice: 2;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-source: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 2h2v2H0zM2 0h2v2H2zM4 2h2v2H4zM2 4h2v2H2z' fill='${encodeURIComponent(color)}' /></svg>");
  border-radius: 14px !important;
`
