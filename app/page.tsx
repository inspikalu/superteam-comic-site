"use client"

import { useRef } from "react"
import Header from "@/components/Header"
import Timeline from "@/components/Timeline"
import Footer from "@/components/Footer"

export default function SuperteamNGComicSite() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header onScrollToTimeline={scrollToTimeline} />
      <Timeline ref={timelineRef} />
      <Footer />
    </div>
  )
}
