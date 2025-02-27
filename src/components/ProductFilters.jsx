import { categories } from "../data/products"

export default function ProductFilters({ selectedCategory, onCategoryChange, onPriceRangeChange }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === null ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="px-4">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
            onChange={(e) => onPriceRangeChange([0, Number.parseInt(e.target.value)])}
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Rs 0</span>
            <span>Rs 100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

