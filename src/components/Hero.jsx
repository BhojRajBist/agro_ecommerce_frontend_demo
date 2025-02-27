"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Authentic Organic Products from Nepal</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Ethically sourced products from rural villages, bringing centuries-old traditions to your doorstep.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}








// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ArrowRight, ChevronLeft, ChevronRight, Leaf, Mountain, Droplet } from "lucide-react"

// const images = [
//   {
//     url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80",
//     title: "Traditional Honey Hunting",
//     description: "An ancient tradition of collecting wild honey from the forests.",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1920&q=80",
//     title: "The Himalayan Honey",
//     description: "Rare and exotic honey sourced from the high mountains.",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1583395145517-1e3177037600?w=1920&q=80",
//     title: "Eco-Friendly Harvesting",
//     description: "Sustainable and ethical methods of honey collection.",
//   },
// ]

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 300 }}
//     className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 overflow-hidden group hover:border-primary/30 transition-all"
//   >
//     <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//     <Icon className="w-12 h-12 mb-6 text-primary drop-shadow-lg" />
//     <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
//       {title}
//     </h3>
//     <p className="text-gray-200 text-lg leading-relaxed">{description}</p>
//   </motion.div>
// )

// export default function SimplifiedHoneyHero() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [slideProgress, setSlideProgress] = useState(0)

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length)
//       setSlideProgress(0)
//     }, 7000)

//     return () => clearInterval(timer)
//   }, [isAutoPlaying])

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const progressTimer = setInterval(() => {
//       setSlideProgress((prev) => {
//         if (prev >= 100) return 100
//         return prev + 1
//       })
//     }, 70)

//     return () => clearInterval(progressTimer)
//   }, [isAutoPlaying])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % images.length)
//     setIsAutoPlaying(false)
//     setSlideProgress(0)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
//     setIsAutoPlaying(false)
//     setSlideProgress(0)
//   }

//   return (
//     <div className="relative h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url(${images[currentSlide].url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/60 to-black/90" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Controls */}
//       <div className="absolute inset-0 z-30 flex items-center justify-between px-6">
//         <motion.button
//           onClick={prevSlide}
//           className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all 
//           shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronLeft className="w-8 h-8 text-white" strokeWidth={2.5} />
//         </motion.button>
//         <motion.button
//           onClick={nextSlide}
//           className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-lg transition-all 
//           shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronRight className="w-8 h-8 text-white" strokeWidth={2.5} />
//         </motion.button>
//       </div>

//       {/* Progress Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             initial={false}
//             animate={{ width: currentSlide === index ? 40 : 16 }}
//             className="h-2 bg-white/50 rounded-full overflow-hidden relative cursor-pointer"
//             onClick={() => {
//               setCurrentSlide(index)
//               setIsAutoPlaying(false)
//               setSlideProgress(0)
//             }}
//           >
//             {currentSlide === index && (
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${slideProgress}%` }}
//                 className="absolute inset-0 bg-primary"
//               />
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 z-20 text-center relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="max-w-4xl mx-auto"
//           >
//             <h1
//               className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-primary via-amber-300 to-primary 
//               bg-clip-text text-transparent leading-tight drop-shadow-2xl"
//             >
//               {images[currentSlide].title}
//             </h1>
//             <p className="text-xl md:text-2xl font-light mb-12 text-gray-200/90 leading-relaxed">
//               {images[currentSlide].description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         {/* Feature Cards Grid */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-6 mb-12">
//           <FeatureCard
//             icon={Leaf}
//             title="Wild Honey"
//             description="Collected from the deep forests using traditional methods."
//           />
//           <FeatureCard
//             icon={Mountain}
//             title="Himalayan Origin"
//             description="Honey sourced from the untouched heights of the Himalayas."
//           />
//           <FeatureCard
//             icon={Droplet}
//             title="Natural & Pure"
//             description="Free from additives, straight from nature to you."
//           />
//         </motion.div>

//         {/* Animated CTA Button */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block"
//         >
//           <a
//             href="/products"
//             className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-amber-500 
//             text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all
//             shadow-lg hover:gap-6 group"
//           >
//             <span>Explore Products</span>
//             <ArrowRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
//           </a>
//         </motion.div>
//       </div>

//       {/* Animated Honey Particles */}
//       <div className="absolute inset-0 pointer-events-none z-10">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{
//               opacity: [0, 0.6, 0],
//               scale: [0, 1, 0],
//               x: Math.random() * 100 - 50 + "vw",
//               y: Math.random() * 100 - 50 + "vh",
//             }}
//             transition={{
//               duration: Math.random() * 4 + 4,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//               delay: Math.random() * 2,
//             }}
//             className="absolute w-2 h-2 bg-primary rounded-full"
//             style={{
//               filter: "blur(1px) drop-shadow(0 0 5px rgba(245, 158, 11, 0.5))",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

