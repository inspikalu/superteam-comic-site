import { Twitter, Youtube } from "lucide-react"
import DiscordIcon from "@/components/icons/DiscordIcon"

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">© 2025 SuperteamNG. All rights reserved.</p>

          <div className="flex space-x-6">
            <a
              href="https://ng.superteam.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors font-bold"
            >
              Superteam Website
            </a>
            <a
              href="https://ng.superteam.fun/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors font-bold"
            >
              About
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/SuperteamNG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border-2 border-white flex items-center justify-center hover:bg-green-400 hover:border-green-400 transition-colors"
            >
              <Twitter className="w-5 h-5 text-black" />
            </a>
            <a
              href="https://discord.com/invite/C6EgkeEAed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border-2 border-white flex items-center justify-center hover:bg-green-400 hover:border-green-400 transition-colors"
            >
              <DiscordIcon className="w-5 h-5 text-black" />
            </a>
            <a
              href="https://www.youtube.com/@SuperteamNigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border-2 border-white flex items-center justify-center hover:bg-green-400 hover:border-green-400 transition-colors"
            >
              <Youtube className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
