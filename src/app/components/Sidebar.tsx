'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import './Sidebar.scss'

interface MenuItem {
  href: string
  label: string
}

interface MenuSection {
  title: string
  icon: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'CSS Modern Features',
    icon: '🎨',
    items: [
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
      { href: '/css-components/view-transitions', label: 'View Transitions' },
      { href: '/css-components/trigonometry', label: 'Trigonometry' },
    ]
  },
  {
    title: 'React Fibers',
    icon: '⚛️',
    items: [
      { href: '/fibers/stack-vs-fiber', label: 'Stack vs Fiber' },
      { href: '/fibers/time-slicing', label: 'Time Slicing' },
      { href: '/fibers/priority-queues', label: 'Priority Queues' },
      { href: '/fibers/concurrent-features', label: 'Concurrent Features' },
    ]
  },
  {
    title: 'Server Components',
    icon: '🖥️',
    items: [
      { href: '/server-components/basic-example', label: 'Basic Example' },
      { href: '/server-components/zero-bundle', label: 'Zero Bundle Demo' },
      { href: '/server-components/data-fetching', label: 'Data Fetching' },
      { href: '/server-components/streaming', label: 'Streaming & Suspense' },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'CSS Modern Features': true,
    'React Fibers': true,
    'Server Components': true,
  })
  const [showAllItems, setShowAllItems] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const toggleShowAll = (title: string) => {
    setShowAllItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const PREVIEW_COUNT = 3

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo">
          <h1>POC React</h1>
          <span className="sidebar-subtitle">Fibers & Server Components</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        {menuSections.map((section) => {
          const isExpanded = expandedSections[section.title]
          const showAll = showAllItems[section.title]
          const visibleItems = showAll ? section.items : section.items.slice(0, PREVIEW_COUNT)
          const hasMore = section.items.length > PREVIEW_COUNT

          return (
            <div key={section.title} className="menu-section">
              <button
                className={`section-header ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleSection(section.title)}
              >
                <span className="section-icon">{section.icon}</span>
                <span className="section-title">{section.title}</span>
                <span className="section-count">{section.items.length}</span>
                <span className="section-arrow">{isExpanded ? '▼' : '▶'}</span>
              </button>

              {isExpanded && (
                <div className="section-items">
                  {visibleItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={pathname === item.href ? 'active' : ''}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {hasMore && !showAll && (
                    <button
                      className="show-more"
                      onClick={() => toggleShowAll(section.title)}
                    >
                      <span>···</span>
                      <span>Ver mais {section.items.length - PREVIEW_COUNT}</span>
                    </button>
                  )}

                  {hasMore && showAll && (
                    <button
                      className="show-more"
                      onClick={() => toggleShowAll(section.title)}
                    >
                      <span>▲</span>
                      <span>Ver menos</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}