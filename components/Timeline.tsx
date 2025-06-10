"use client"

import { useEffect, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import MilestonePanel from "@/components/MilestonePanel"
import { milestones } from "@/data/milestones"

const Timeline = forwardRef<HTMLDivElement>((props, ref) => {
  // Animation for panels on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-panel")
          }
        })
      },
      { threshold: 0.1 },
    )

    const panels = document.querySelectorAll(".comic-panel-milestone")
    panels.forEach((panel) => observer.observe(panel))

    return () => {
      panels.forEach((panel) => observer.unobserve(panel))
    }
  }, [])

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="comic-title-box bg-black border-4 border-black px-8 py-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white comic-title">THE EPIC JOURNEY</h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="comic-panel bg-white border-4 border-black p-6">
            <p className="text-lg text-black leading-tight comic-text">
              This is the epic tale of SuperteamNG—where talent meets opportunity, and Web3 dreams become reality. Join
              us as we celebrate two years of building Nigeria's Solana ecosystem, spanning 23 states and generating
              over $680k in community GDP. Our journey is just beginning!
            </p>
            <div className="absolute -top-3 -right-3 transform rotate-12 text-green-500 font-bold text-xl comic-effect">
              POW!
            </div>
          </div>
        </div>

        {/* Comic Panel Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <MilestonePanel key={index} milestone={milestone} index={index} />
          ))}
        </div>

        {/* Final Anniversary Panel */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="comic-panel bg-white border-4 border-black p-8 pt-12 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-2 font-bold text-xl border-4 border-black comic-title">
              JUNE 10, 2025: THE CELEBRATION CONTINUES!
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-bold mb-4 comic-title">JOIN US FOR THE NEXT CHAPTER</h3>
              <p className="text-lg mb-6 comic-text">
                As we celebrate 2 years of innovation, community building, and Web3 advancement across Nigeria, we
                invite you to be part of our growing story. The future of Solana in Africa is just beginning!
              </p>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg font-bold border-4 border-black comic-button">
                <Zap className="mr-2" />
                Join SuperteamNG
              </Button>
            </div>
            <div className="absolute -bottom-3 -right-3 transform rotate-12 text-green-500 font-bold text-2xl comic-effect">
              WHAM!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"

export default Timeline
