'use client';

import { useEffect, forwardRef, useRef } from 'react';
import { Zap } from 'lucide-react';
import MilestonePanel from '@/components/MilestonePanel';
import Link from 'next/link';
import { milestones } from '@/data/milestones';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Timeline = forwardRef<HTMLDivElement>((props, ref) => {
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current;
    const container = containerRef.current;
    if (!container || panels.length === 0) return;

    // Set all panels to absolute in the container, stacked
    panels.forEach((panel, i) => {
      if (panel) {
        gsap.set(panel, {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          zIndex: milestones.length - i,
          rotationY: 0,
          opacity: i === 0 ? 1 : 0,
          pointerEvents: i === 0 ? 'auto' : 'none',
        });
      }
    });

    // Pin the container and animate panels as user scrolls
    const totalPanels = milestones.length;
    const panelDuration = 1 / totalPanels;
    let triggers: ScrollTrigger[] = [];

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${window.innerHeight * totalPanels}`,
      pin: true,
      anticipatePin: 1,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const panelIndex = Math.floor(progress * totalPanels);
        panels.forEach((panel, i) => {
          if (!panel) return;
          if (i < panelIndex) {
            gsap.to(panel, { rotationY: -90, opacity: 0, pointerEvents: 'none', duration: 0.5, overwrite: 'auto' });
          } else if (i === panelIndex) {
            gsap.to(panel, { rotationY: 0, opacity: 1, pointerEvents: 'auto', duration: 0.5, overwrite: 'auto' });
          } else {
            gsap.to(panel, { rotationY: 90, opacity: 0, pointerEvents: 'none', duration: 0.5, overwrite: 'auto' });
          }
        });
      },
      onLeave: () => {
        // When done, show the final panel
        if (finalRef.current) {
          gsap.to(finalRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.5 });
        }
      },
      onEnterBack: () => {
        if (finalRef.current) {
          gsap.to(finalRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.5 });
        }
      }
    });

    // Hide the final panel initially
    if (finalRef.current) {
      gsap.set(finalRef.current, { opacity: 0, pointerEvents: 'none' });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen">
      {/* Introduction Panel */}
      <div ref={introRef} className="h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="comic-title-box bg-black border-4 border-black px-8 py-2 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white comic-title">
              THE EPIC JOURNEY
            </h2>
          </div>
          <div className="comic-panel bg-white border-4 border-black p-6 relative">
            <p className="text-lg text-black leading-tight comic-text">
              This is the epic tale of SuperteamNG—where talent meets
              opportunity, and Web3 dreams become reality. Join us as we
              celebrate two years of building Nigeria's Solana ecosystem,
              spanning 23 states and generating over $680k in community GDP. Our
              journey is just beginning!
            </p>
            <div className="absolute -top-3 -right-3 transform rotate-12 text-green-500 font-bold text-xl comic-effect">
              POW!
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Panels Container (pinned) */}
      <div
        ref={containerRef}
        className="relative h-[85vh] w-full flex items-center justify-center"
        style={{ minHeight: '85vh' }}
      >
        {milestones.map((milestone, index) => (
          <div
            key={index}
            ref={el => { panelsRef.current[index] = el; }}
            className="w-full h-full flex items-center justify-center"
            style={{ pointerEvents: index === 0 ? 'auto' : 'none' }}
          >
            <MilestonePanel milestone={milestone} index={index} />
          </div>
        ))}
      </div>

      {/* Final Anniversary Panel (normal block, not absolute) */}
      <div className="h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="comic-panel bg-white border-4 border-black p-8 pt-12 relative">
            <div className="absolute -top-[5rem] md:-top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-2 font-bold text-xl border-4 border-black comic-title">
              JUNE 10, 2025: THE CELEBRATION CONTINUES!
            </div>
            <div className="text-center mt-4">
              <h3 className="text-3xl font-bold mb-4 comic-title">
                JOIN US FOR THE NEXT CHAPTER
              </h3>
              <p className="text-lg mb-6 comic-text break-word">
                As we celebrate 2 years of innovation, community building, and
                Web3 advancement across Nigeria, we invite you to be part of our
                growing story. The future of Solana in Africa is just beginning!
              </p>
              <Link
                href="https://ng.superteam.fun/"
                target="_blank"
                className="flex bg-black hover:bg-gray-800 text-white px-8 py-3 text-sm font-bold border-4 border-black comic-button max-w-full md:w-[60%] mx-auto"
              >
                <Zap className="mr-2" />
                Join SuperteamNG
              </Link>
            </div>
            <div className="absolute -bottom-3 -right-3 transform rotate-12 text-green-500 font-bold text-2xl comic-effect">
              WHAM!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
