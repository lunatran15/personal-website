import * as React from 'react'

export function PenIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 2.97 2.97L7 19.94 3 21l1.06-4L16.5 3.5z" />
    </svg>
  )
}

export function PptIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
      <path d="M8 8h4v8H8z" />
      <path d="M13 12h3" />
      <path d="M13 9h3" />
    </svg>
  )
}

export default {
  PenIcon,
  PptIcon,
}
