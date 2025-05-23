import React from 'react'

export default function Loader() {
  return (
    <div className="text-center py-5">
        <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
