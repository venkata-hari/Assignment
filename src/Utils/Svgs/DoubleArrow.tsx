import React, { Fragment } from 'react'

function DoubleArrow() {
  return (
    <Fragment>
         <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="KeyboardDoubleArrowLeftOutlinedIcon"
        style={{ color: 'rgb(194, 91, 53)', cursor: 'pointer' }}
      >
        <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"></path>
        <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"></path>
      </svg>
    </Fragment>
  )
}

export default DoubleArrow