"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Nepal Organics</h1>

          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">
              Nepal Organics is dedicated to bringing the finest organic products from rural Nepal to conscious
              consumers worldwide. Our mission is to support local communities while preserving traditional farming and
              crafting methods.
            </p>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80"
                alt="Nepalese farmers"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We believe in sustainable agriculture, fair trade practices, and preserving traditional knowledge. By
              connecting rural producers directly with global consumers, we ensure fair compensation for their hard work
              and expertise.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Communities</h2>
            <p className="text-muted-foreground mb-6">
              Each product in our collection tells a story of the village it comes from. From the tea gardens of Ilam to
              the honey hunters of Ghandruk, we work with communities that have been perfecting their craft for
              generations.
            </p>

            <h2 className="text-2xl font-bold mb-4">Quality & Sustainability</h2>
            <p className="text-muted-foreground">
              All our products are organic, ethically sourced, and produced using sustainable methods. We work closely
              with local communities to ensure the highest quality while maintaining environmental responsibility.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

