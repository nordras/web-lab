'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Sidebar.scss'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/css-components/0-columns-masonry', label: '0. Columns Masonry' },
  { href: '/css-components/1-border-image', label: '1. Border Image Gradient' },
  { href: '/css-components/2-subgrid', label: '2. Subgrid' },
  { href: '/css-components/3-infinite-carousel', label: '3. Infinite Carousel' },
  { href: '/css-components/4-viewport-units', label: '4. Viewport Units' },
  { href: '/css-components/container-queries', label: 'Container Queries' },
  { href: '/css-components/has-selector', label: ':has() Selector' },
  { href: '/css-components/nesting', label: 'CSS Nesting' },
  { href: '/css-components/cascade-layers', label: 'Cascade Layers' },
  { href: '/css-components/color-spaces', label: 'Color Spaces' },
  { href: '/css-components/subgrid', label: 'Subgrid' },
  { href: '/css-components/view-transitions', label: 'View Transitions' },
  { href: '/css-components/trigonometry', label: 'Trigonometry' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>CSS Modern Features</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'active' : ''}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}