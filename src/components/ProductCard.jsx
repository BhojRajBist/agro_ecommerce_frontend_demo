"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{product.village.name}</p>
          <p className="text-primary font-bold">Rs {product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  )
}

