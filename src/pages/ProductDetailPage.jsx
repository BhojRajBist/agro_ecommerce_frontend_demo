"use client"

import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Map from "../components/Map"
import { products } from "../data/products"

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-primary hover:text-primary/90 transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Link
        to="/products"
        className="fixed top-4 left-4 z-10 bg-background/80 backdrop-blur p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowLeft className="w-6 h-6" />
      </Link>

      <div className="grid lg:grid-cols-2 gap-8 p-8">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl text-primary font-semibold mt-2">Rs{product.price.toFixed(2)}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">About this product</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">From {product.village.name}</h2>
            <p className="text-muted-foreground">{product.village.story}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-[calc(100vh-4rem)] sticky top-8"
        >
          <Map
            villages={[product.village]}
            center={[product.village.longitude, product.village.latitude]}
            zoom={10}
            selectedVillage={product.village}
          />
        </motion.div>
      </div>
    </div>
  )
}

