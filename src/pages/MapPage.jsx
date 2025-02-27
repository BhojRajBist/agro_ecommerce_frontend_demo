"use client"

import { useState } from "react"
import Map from "../components/Map"
import { products } from "../data/products"
import { motion, AnimatePresence } from "framer-motion"
import ProductCard from "../components/ProductCard"

export default function MapPage() {
  const [selectedVillage, setSelectedVillage] = useState(null)

  const villages = Array.from(new Set(products.map((p) => p.village)))

  const villageProducts = products.filter((p) => p.village.name === selectedVillage?.name)

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <Map villages={villages} onVillageClick={setSelectedVillage} selectedVillage={selectedVillage} />

      <AnimatePresence>
        {selectedVillage && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-96 bg-background/95 backdrop-blur shadow-lg p-6 overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedVillage.name}</h2>
            <p className="text-muted-foreground mb-6">{selectedVillage.story}</p>
            <div className="space-y-4">
              {villageProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

