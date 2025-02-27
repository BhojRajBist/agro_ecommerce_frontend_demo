"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, Menu, X } from "lucide-react"

export default function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Nepal Organics
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/map" className="hover:text-primary transition-colors">
              Map
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div initial={false} animate={{ height: isMenuOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
        <div className="px-4 py-2 space-y-4">
          <Link to="/" className="block hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="block hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/map" className="block hover:text-primary transition-colors">
            Map
          </Link>
          <Link to="/about" className="block hover:text-primary transition-colors">
            About
          </Link>
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </form>
        </div>
      </motion.div>
    </nav>
  )
}

