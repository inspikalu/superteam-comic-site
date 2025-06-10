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
      <div className="absolute inset-0 overflow-hidden">
        <div className="action-lines"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 pt-16">
        {/* Comic book title */}
        <div className="mb-8">
          <div className="inline-block">
            <div className="comic-logo text-center mb-4">
              <div className="text-4xl md:text-6xl font-bold mb-2">
                SUPERTEAM<span className="text-green-500">NG</span>
              </div>
              <div className="text-xl md:text-2xl">PRESENTS</div>
            </div>
          </div>
        </div>

        {/* Main title in jagged speech bubble */}
        <div className="mb-12 relative">
          <div className="jagged-bubble inline-block">
            <h1 className="text-3xl md:text-5xl font-bold comic-title text-black px-8 py-4">
              2 YEARS OF WEB3 DREAMS
            </h1>
          </div>
        </div>

        {/* Main comic panel */}
        <div className="comic-panel bg-white border-4 border-black p-8 max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl mb-4 text-black font-bold comic-subtitle">
                SuperteamNG's Epic Anniversary Tale
              </h2>
              <p className="text-base md:text-lg mb-6 text-black leading-tight">
                Once upon a time, in the vibrant heart of Nigeria, a spark
                ignited in June 2023. A group of dreamers, coders, and creators
                banded together under the banner of SuperteamNG, Africa's first
                Solana Superteam chapter.
              </p>
              <p className="text-base md:text-lg mb-6 text-black leading-tight">
                From humble meetups in Lagos to conquering hackathons and
                building a community GDP of over $680k, they blazed a trail
                across 23 states!
              </p>
              <div className="text-right mt-8">
                <Button
                  onClick={onScrollToTimeline}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 text-lg font-bold comic-button"
                >
                  <BookOpen className="mr-2" />
                  Begin The Adventure
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-64 bg-gray-100 border-2 border-black flex items-center justify-center relative">
                <Image
                  src={'/superteam-community.svg'}
                  alt="Superteam Community"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-8 transform rotate-12 text-green-500 font-bold text-2xl comic-effect">
            BOOM!
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-10 h-10 text-black" />
        </div>
      </div>
    </header>
  );
}
