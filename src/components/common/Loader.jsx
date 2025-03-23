import React from 'react'

export default function Loader() {
  return (
    <div className="text-center py-5">
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
