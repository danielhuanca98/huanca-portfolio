import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Gmail"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={512} height={512} rx="15%" fill="#fff" />
    <path d="M158 391V249l-82-63v175q0 30 30 30" fill="#4285f4" />
    <path d="m154 248 102 77 102-77v-98l-102 77-102-77" fill="#ea4335" />
    <path d="M354 391V249l82-63v175q0 30-30 30" fill="#34a853" />
    <path d="m76 188 82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" />
    <path d="m436 188-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" />
  </svg>
)

export default SvgComponent