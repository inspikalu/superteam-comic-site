'use client';

import { Button } from '@/components/ui/button';
import { BookOpen, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeaderProps {
  onScrollToTimeline: () => void;
}

export default function Header({ onScrollToTimeline }: HeaderProps) {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Action lines background */}
      <div className="absolute inset-0">
        <div className="action-lines"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 text-center z-10 pt-8">
        {/* Comic book title */}
        <div className="mb-8">
          <div className="inline-block">
            <div className="comic-logo text-center mb-4">
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 break-words">
                SUPERTEAM<span className="text-green-500">NG</span>
              </div>
              <div className="text-lg sm:text-xl md:text-2xl">PRESENTS</div>
            </div>
          </div>
        </div>

        {/* Main title in jagged speech bubble */}
        <div className="mb-8 sm:mb-12 relative px-2">
          <div className="jagged-bubble inline-block max-w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold comic-title text-black px-4 sm:px-6 md:px-8 py-3 sm:py-4 break-words leading-tight">
              2 YEARS OF WEB3 DREAMS
            </h1>
          </div>
        </div>

        {/* Main comic panel */}
        <div className="comic-panel bg-white border-4 border-black p-4 sm:p-6 md:p-8 max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="text-left order-2 md:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-black font-bold comic-subtitle break-words">
                SuperteamNG's Epic Anniversary Tale
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-black leading-relaxed">
                Once upon a time, in the vibrant heart of Nigeria, a spark
                ignited in June 2023. A group of dreamers, coders, and creators
                banded together under the banner of SuperteamNG, Africa's first
                Solana Superteam chapter.
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-black leading-relaxed">
                From humble meetups in Lagos to conquering hackathons and
                building a community GDP of over $680k, they blazed a trail
                across 23 states!
              </p>
              <div className="text-center md:text-right mt-6 md:mt-8">
                <Button
                  onClick={onScrollToTimeline}
                  className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 text-base sm:text-md font-bold comic-button w-full sm:w-auto"
                >
                  <BookOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Begin The Adventure
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 md:order-2">
              <div className="w-full max-w-sm md:max-w-none h-48 sm:h-56 md:h-64 bg-gray-100 border-2 border-black flex items-center justify-center relative overflow-hidden">
                <Image
                  src={'/superteam-community.svg'}
                  alt="Superteam Community"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-8 transform rotate-12 text-green-500 font-bold text-xl sm:text-2xl comic-effect">
            BOOM!
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
        </div>
      </div>
    </header>
  );
}
