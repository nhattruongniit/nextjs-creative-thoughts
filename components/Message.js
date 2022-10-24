/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Message({ avatar, description, username, children }) {
  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" alt="" />
        <h2>{username}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default Message