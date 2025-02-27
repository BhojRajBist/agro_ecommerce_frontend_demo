import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nepal Organics</h3>
            <p className="text-muted-foreground">
              Connecting you with authentic organic products from the heart of Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors">
                  Village Map
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=Tea"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tea
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Honey"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Honey
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Spices"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-muted-foreground">Email: contact@nepalorganics.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nepal Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

