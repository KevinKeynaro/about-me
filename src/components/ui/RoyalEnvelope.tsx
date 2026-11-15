import { useEffect, useState } from 'react'
import { siteContent } from '../../content/siteContent'

interface RoyalEnvelopeProps {
  isOpen: boolean
  onOpen: () => void
}

export default function RoyalEnvelope({ isOpen, onOpen }: RoyalEnvelopeProps) {
  // animationStage: 'sealed' | 'unsealing' | 'rising' | 'opened'
  const [stage, setStage] = useState<'sealed' | 'unsealing' | 'rising' | 'opened'>(
    isOpen ? 'opened' : 'sealed'
  )
  const [isFlapBehind, setIsFlapBehind] = useState<boolean>(isOpen)

  useEffect(() => {
    if (!isOpen) {
      setStage('sealed')
      setIsFlapBehind(false)
    } else if (stage === 'sealed') {
      setStage('opened')
      setIsFlapBehind(true)
    }
  }, [isOpen])

  const handleBreakSeal = () => {
    if (stage !== 'sealed') return

    // Step 1: Flap rotates open
    setStage('unsealing')

    // At halfway through flap flip (~350ms), send flap behind the rising paper
    setTimeout(() => {
      setIsFlapBehind(true)
    }, 350)

    // Step 2: Letter card rises up cleanly in front of unfolded flap
    const riseTimer = setTimeout(() => {
      setStage('rising')
    }, 700)

    // Step 3: Complete transition, dissolve envelope overlay
    const completeTimer = setTimeout(() => {
      setStage('opened')
      onOpen()
    }, 1800)

    return () => {
      clearTimeout(riseTimer)
      clearTimeout(completeTimer)
    }
  }

  if (stage === 'opened' && isOpen) {
    return null
  }

  const isFlapOpen = stage === 'unsealing' || stage === 'rising' || stage === 'opened'
  const isLetterRising = stage === 'rising' || stage === 'opened'
  const isDissolving = stage === 'opened'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome Letter Envelope"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory/98 backdrop-blur-md px-4 py-6 transition-opacity duration-600 ease-royal overflow-y-auto ${
        isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top note & Skip button */}
      <div className="absolute top-6 right-6 z-50">
        <button
          type="button"
          onClick={() => {
            setStage('opened')
            onOpen()
          }}
          className="text-xs uppercase tracking-[0.14em] text-charcoal-soft hover:text-navy px-3 py-2 border border-gold/40 hover:border-gold rounded-sm transition-colors duration-400 ease-royal focus-visible:outline-2 focus-visible:outline-gold"
        >
          Skip into site
        </button>
      </div>

      <div className="text-center mb-6 z-50">
        <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-charcoal-soft">
          A personal note from
        </span>
        <h2 className="font-decorative text-4xl md:text-5xl text-navy mt-1">
          {siteContent.name}
        </h2>
      </div>

      {/* Main Large Envelope Container (expanded size per item 1) */}
      <div className="relative w-full max-w-[680px] h-[320px] md:h-[410px] perspective-1000 select-none my-auto">
        {/* Envelope Back Plate */}
        <div className="absolute inset-0 bg-ivory-deep border border-gold/40 rounded-sm shadow-[0_16px_40px_rgba(27,42,74,0.08)] z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#b08d57_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-15" />
        </div>

        {/* Top Flap (with 3D fold, drops behind letter at halfway per item 5) */}
        <div
          className={`absolute inset-x-0 top-0 h-[180px] md:h-[225px] transform-style-3d origin-top transition-transform duration-700 ease-royal ${
            isFlapBehind ? 'z-0' : 'z-40'
          }`}
          style={{
            transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          <svg
            className="w-full h-full drop-shadow-[0_4px_10px_rgba(27,42,74,0.06)]"
            viewBox="0 0 680 225"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 680,0 340,225"
              className="fill-ivory-deep stroke-gold/60"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* The Letter inside (rises in FRONT of unfolded flap per item 5) */}
        <div
          className={`absolute left-4 right-4 md:left-6 md:right-6 top-3 md:top-4 h-[290px] md:h-[370px] bg-ivory border border-gold/50 rounded-sm p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_8px_24px_rgba(27,42,74,0.06)] transition-all duration-800 ease-royal z-25 ${
            isLetterRising
              ? '-translate-y-36 md:-translate-y-48 shadow-[0_20px_48px_rgba(27,42,74,0.12)]'
              : 'translate-y-0'
          }`}
        >
          <span className="text-xs uppercase tracking-[0.16em] font-medium text-charcoal-soft">
            {siteContent.heroCountry}
          </span>
          <p className="font-decorative text-5xl md:text-7xl text-navy my-3">
            {siteContent.name}
          </p>
          <div className="flex items-center gap-3 w-24 mx-auto my-2" aria-hidden="true">
            <span className="h-[1px] flex-1 bg-gold/60" />
            <svg width="7" height="7" viewBox="0 0 7 7" className="fill-gold">
              <polygon points="3.5,0 7,3.5 3.5,7 0,3.5" />
            </svg>
            <span className="h-[1px] flex-1 bg-gold/60" />
          </div>
          <p className="font-display italic text-base md:text-lg text-charcoal-soft mt-2">
            Welcome to my personal space
          </p>
        </div>

        {/* Front Envelope Pocket with Crisp Seam Lines ✉️ (per item 2) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 680 410"
            preserveAspectRatio="none"
          >
            {/* Left triangle fold */}
            <polygon
              points="0,0 340,205 0,410"
              className="fill-ivory-deep/95 stroke-gold/45"
              strokeWidth="1.5"
            />
            {/* Right triangle fold */}
            <polygon
              points="680,0 340,205 680,410"
              className="fill-ivory-deep/95 stroke-gold/45"
              strokeWidth="1.5"
            />
            {/* Bottom triangle fold with crisp diagonal gold seam lines (✉️) */}
            <polygon
              points="0,410 340,195 680,410"
              className="fill-ivory-deep stroke-gold/60"
              strokeWidth="1.5"
            />
            {/* Fine accent line along bottom fold */}
            <line
              x1="0"
              y1="410"
              x2="340"
              y2="195"
              className="stroke-gold/70"
              strokeWidth="1.5"
            />
            <line
              x1="680"
              y1="410"
              x2="340"
              y2="195"
              className="stroke-gold/70"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Crimson Pressed Wax Seal with Uneven Melted Rim & Debossed Rings (per items 3 & 4) */}
        {stage === 'sealed' && (
          <div className="absolute top-[170px] md:top-[205px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
            <button
              type="button"
              onClick={handleBreakSeal}
              aria-label="Break crimson wax seal to open Kevin's letter"
              className="group relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-400 ease-royal focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 cursor-pointer"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_8px_20px_rgba(100,10,15,0.45)] group-hover:drop-shadow-[0_10px_26px_rgba(120,15,20,0.55)] transition-all duration-400"
              >
                <defs>
                  {/* Crimson wax gradient */}
                  <radialGradient id="waxGradient" cx="42%" cy="40%" r="58%">
                    <stop offset="0%" stopColor="#A82328" />
                    <stop offset="45%" stopColor="#87171C" />
                    <stop offset="85%" stopColor="#630D11" />
                    <stop offset="100%" stopColor="#4A080A" />
                  </radialGradient>
                  {/* Subtle debossed shadow for inner impression */}
                  <filter id="debossInner" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#2E0406" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Organic uneven melted wax outer contour (per item 4) */}
                <path
                  d="M 50,4
                     C 64,2 75,7 84,17
                     C 93,27 98,38 96,52
                     C 94,66 90,78 80,87
                     C 70,95 56,98 44,97
                     C 30,96 18,91 11,81
                     C 3,71 1,57 4,43
                     C 7,30 14,18 24,10
                     C 33,2 41,5 50,4 Z"
                  fill="url(#waxGradient)"
                />

                {/* Hot wax uneven perimeter ridge highlights */}
                <path
                  d="M 28,10 C 35,5 45,4 52,5 C 65,4 74,9 81,18"
                  fill="none"
                  stroke="#D1474C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 12,80 C 20,89 31,95 44,96 C 56,97 68,94 77,87"
                  fill="none"
                  stroke="#3B0507"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Outer pressed ring groove (per item 3) */}
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#380507"
                  strokeWidth="2.5"
                  opacity="0.85"
                />
                <circle
                  cx="50"
                  cy="51"
                  r="35"
                  fill="none"
                  stroke="#C9383E"
                  strokeWidth="1"
                  opacity="0.4"
                />

                {/* Inner pressed debossed circle (feeling of being pressed) */}
                <circle
                  cx="50"
                  cy="50"
                  r="29"
                  fill="#781317"
                  stroke="#380507"
                  strokeWidth="2"
                  filter="url(#debossInner)"
                />
                <circle
                  cx="50"
                  cy="50.5"
                  r="28"
                  fill="none"
                  stroke="#BD3339"
                  strokeWidth="1"
                  opacity="0.45"
                />

                {/* Ornate Royal Monogram 'K' (per item 3) */}
                {/* Debossed shadow layer */}
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontStyle="italic"
                  fontWeight="700"
                  fontSize="36"
                  fill="#2E0406"
                  opacity="0.9"
                >
                  K
                </text>
                {/* Debossed highlight face */}
                <text
                  x="49.5"
                  y="61"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', Georgia, serif"
                  fontStyle="italic"
                  fontWeight="700"
                  fontSize="36"
                  fill="#ECA3A7"
                >
                  K
                </text>
              </svg>
            </button>

            {/* Instruction tooltip */}
            <span className="mt-3 text-[10px] uppercase tracking-[0.16em] font-medium text-charcoal-soft bg-ivory/90 px-3 py-1 rounded-sm border border-gold/30 pointer-events-none shadow-xs">
              Break seal to open
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
