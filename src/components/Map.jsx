"use client"

import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

export default function Map({
  villages,
  onVillageClick,
  center = [84.124, 28.3949],
  zoom = 7,
  selectedVillage = null,
}) {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://api.maptiler.com/maps/basic-v2/style.json?key=zSKe702Zq1told0U6bDZ",
      center: center,
      zoom: zoom,
    })

    map.current.addControl(new maplibregl.NavigationControl())

    return () => {
      map.current?.remove()
    }
  }, [center, zoom])

  useEffect(() => {
    if (!map.current) return

    // Remove existing markers
    const markers = document.getElementsByClassName("maplibre-marker")
    while (markers[0]) {
      markers[0].remove()
    }

    // Add markers for each village
    villages.forEach((village) => {
      const marker = document.createElement("div")
      marker.className = "maplibre-marker"
      marker.innerHTML = `
        <div class="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer
          ${selectedVillage?.name === village.name ? "scale-150" : "hover:scale-125"} 
          transition-transform duration-200"
        ></div>
      `

      marker.addEventListener("click", () => {
        onVillageClick?.(village)
      })

      new maplibregl.Marker({ element: marker }).setLngLat([village.longitude, village.latitude]).addTo(map.current)
    })
  }, [villages, selectedVillage, onVillageClick])

  return <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
}

