// // "use client"
import React from 'react'
import "./Video.css"

export default function Video() {
  return (
    <div className="video-wrapper">
      <video
        src="/assets/TBIVIDEO.mp4"
        autoPlay
        loop
        muted
        className="tbivideo-directcss"
      ></video>
      <div className="video-overlay"></div>
    </div>
  )
}
