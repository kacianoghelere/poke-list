import React from 'react'

const LoadingSpinner = (props) => (
  <div
    className="d-flex justify-content-center text-danger"
    {...props}
  >
    <div
      className="spinner-border"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default LoadingSpinner
