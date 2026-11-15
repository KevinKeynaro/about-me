import { useEffect, useRef, useState } from 'react'

export interface NavItem {
  id: string
  label: string
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'identity', label: 'Identity' },
  { id: 'reading', label: 'Reading' },
  { id: 'movies', label: 'Movies' },
  { id: 'sports', label: 'Sports' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const navContainerRef = useRef<HTMLDivElement>(null)

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find visible entries
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visible.length > 0) {
        const topSection = visible[0].target.id
        if (NAV_ITEMS.some((item) => item.id === topSection)) {
          setActiveId(topSection)
          return
        }
      }

      // If scrolled to top (hero section visible)
      if (window.scrollY < 200) {
        setActiveId('')
      }
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.2, 0.5, 0.8],
    })

    const observedElements: Element[] = []
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) {
        observer.observe(el)
        observedElements.push(el)
      }
    })

    // Also observe hero to clear active state when at top
    const heroEl = document.getElementById('hero')
    if (heroEl) {
      observer.observe(heroEl)
      observedElements.push(heroEl)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Update sliding underline position when activeId changes or window resizes
  useEffect(() => {
    const updateUnderline = () => {
      if (!activeId) {
        setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }))
        return
      }

      const activeEl = linkRefs.current.get(activeId)
      const containerEl = navContainerRef.current

      if (activeEl && containerEl) {
        const containerRect = containerEl.getBoundingClientRect()
        const linkRect = activeEl.getBoundingClientRect()

        setUnderlineStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
          opacity: 1,
        })
      }
    }

    updateUnderline()
    window.addEventListener('resize', updateUnderline)
    return () => window.removeEventListener('resize', updateUnderline)
  }, [activeId])

  const handleLinkClick = (id: string) => {
    setActiveId(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/95 backdrop-blur-sm border-b border-gold/40 transition-colors">
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between md:justify-center relative">
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <a
            href="#hero"
            className="text-xs uppercase tracking-[0.12em] font-medium text-charcoal-soft hover:text-navy min-h-[44px] inline-flex items-center"
          >
            Kevin Keynaro
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-charcoal hover:text-navy focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-5 h-4 flex flex-col justify-between" aria-hidden="true">
              <span
                className={`h-[1.5px] w-full bg-charcoal transition-transform duration-400 ease-royal ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-charcoal transition-opacity duration-400 ease-royal ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-charcoal transition-transform duration-400 ease-royal ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          ref={navContainerRef}
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-10 relative h-full"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.id, el)
                  else linkRefs.current.delete(item.id)
                }}
                onClick={() => handleLinkClick(item.id)}
                className={`h-full min-h-[44px] px-2 inline-flex items-center text-[13px] uppercase tracking-[0.12em] font-medium transition-colors duration-400 ease-royal focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                  isActive ? 'text-navy' : 'text-charcoal-soft hover:text-navy'
                }`}
              >
                {item.label}
              </a>
            )
          })}

          {/* Sliding Gold Underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-gold transition-all duration-400 ease-royal pointer-events-none"
            style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
              opacity: underlineStyle.opacity,
            }}
            aria-hidden="true"
          />
        </nav>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-ivory border-b border-gold/40 px-6 py-4 animate-fadeIn">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`min-h-[44px] px-3 flex items-center text-[13px] uppercase tracking-[0.12em] font-medium border-l-2 transition-colors duration-400 ease-royal focus-visible:outline-2 focus-visible:outline-gold ${
                    isActive
                      ? 'border-gold text-navy bg-ivory-deep'
                      : 'border-transparent text-charcoal hover:text-navy hover:bg-ivory-deep/50'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
