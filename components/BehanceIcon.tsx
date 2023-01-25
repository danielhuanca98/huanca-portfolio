import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title />
    <path d="M26.49 30H5.5A3.35 3.35 0 0 1 3 29a3.35 3.35 0 0 1-1-2.48V5.5A3.35 3.35 0 0 1 3 3a3.35 3.35 0 0 1 2.5-1h21A3.35 3.35 0 0 1 29 3a3.35 3.35 0 0 1 1 2.5v21a3.52 3.52 0 0 1-3.51 3.5ZM6.37 9.89c-.06 0-.09 0-.1.08v11.92a.09.09 0 0 0 .1.1h4.47a12.27 12.27 0 0 0 2.87-.25 3.43 3.43 0 0 0 2.48-3.38v-.05a2.76 2.76 0 0 0-1.79-2.82 2.65 2.65 0 0 0 1.43-2.43 4.82 4.82 0 0 0-.06-.67c-.41-1.67-1.57-2.5-3.48-2.5ZM8.73 12h2.87q1.77 0 1.77 1.29a3 3 0 0 1-.11.63c-.17.47-.9.7-2.17.7H8.73Zm0 4.66h2.94c1.29 0 1.93.47 1.93 1.43v.15q0 1.59-1.71 1.59H8.73Zm12.54-3.9a4.71 4.71 0 0 0-1.86.37 4.17 4.17 0 0 0-2.55 4.1v.71a4.65 4.65 0 0 0 .65 2.43 4.49 4.49 0 0 0 3.76 1.9 5 5 0 0 0 2.73-.68c1.05-.85 1.57-1.56 1.57-2.12 0-.1 0-.16-.08-.16h-2.26a2 2 0 0 1-1.82 1.05 2.29 2.29 0 0 1-.55-.09 2 2 0 0 1-1.66-2.11h6.43c.06 0 .08 0 .08-.07v-.75a5.39 5.39 0 0 0-.07-.88 4 4 0 0 0-4.37-3.7Zm-2.73-2.2s-.06 0-.07.08v1.09c0 .07 0 .1.07.1h5.13c.08 0 .12 0 .12-.1v-1.09c0-.05 0-.08-.12-.08Zm.76 6a2.15 2.15 0 0 1 .11-.47 1.78 1.78 0 0 1 1.86-1.34 3.32 3.32 0 0 1 .67.07 1.79 1.79 0 0 1 1.32 1.74Z" />
  </svg>
)

export default SvgComponent
