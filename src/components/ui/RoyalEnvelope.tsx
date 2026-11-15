import { useEffect, useState } from 'react'
import { siteContent } from '../../content/siteContent'

interface RoyalEnvelopeProps {
  isOpen: boolean
  onOpen: () => void
}

type Stage = 'sealed' | 'flap-open' | 'rising' | 'dissolving'

export default function RoyalEnvelope({ isOpen, onOpen }: RoyalEnvelopeProps) {
  const [stage, setStage] = useState<Stage>(isOpen ? 'dissolving' : 'sealed')

  // Lock body scroll while the envelope overlay is mounted
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setStage('sealed')
    } else if (stage === 'sealed') {
      setStage('dissolving')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const finish = () => {
    setStage('dissolving')
    onOpen()
  }

  const handleBreakSeal = () => {
    if (stage !== 'sealed') return

    setStage('flap-open')
    setTimeout(() => setStage('rising'), 800)
    setTimeout(() => finish(), 2200)
  }

  if (isOpen && stage === 'dissolving') {
    return null
  }

  const isFlapOpen = stage === 'flap-open' || stage === 'rising' || stage === 'dissolving'
  const isLetterRising = stage === 'rising' || stage === 'dissolving'
  const isDissolving = stage === 'dissolving'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome letter"
      className={`fixed inset-0 z-[100] overflow-hidden bg-ivory transition-opacity duration-700 ease-royal ${
        isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Skip control */}
      <button
        type="button"
        onClick={finish}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-[60] min-h-[44px] px-4 text-[11px] uppercase tracking-[0.14em] text-charcoal-soft border border-gold/40 rounded-sm hover:text-navy hover:border-gold transition-colors duration-400 ease-royal focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
      >
        Skip into site
      </button>

      <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 py-16 md:gap-10">
        {/* Heading */}
        <div className="text-center shrink-0">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-medium text-charcoal-soft">
            A personal note from
          </span>
          <h2 className="font-decorative text-3xl md:text-5xl text-navy leading-tight">
            {siteContent.name}
          </h2>
        </div>

        {/* Envelope stage */}
        <div className="relative w-full max-w-[560px] md:max-w-[680px] shrink-0">
          <div
            className="relative w-full aspect-[680/440] perspective-1000 select-none"
            style={{ perspective: '1200px' }}
          >
            {/* 1. Back plate */}
            <div className="absolute inset-0 rounded-sm border border-gold/30 bg-ivory-deep z-0" />

            {/* 2. Letter (hidden inside while sealed) */}
            <div
              className={`absolute left-[4%] right-[4%] top-[3%] z-[15] flex flex-col items-center justify-center rounded-sm border border-gold/50 bg-ivory px-6 py-8 text-center shadow-[0_2px_10px_rgba(27,42,74,0.05)] transition-transform duration-[1200ms] ease-royal ${
                isLetterRising ? '-translate-y-[38%]' : 'translate-y-0'
              }`}
              style={{ height: '78%' }}
            >
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-charcoal-soft">
                {siteContent.heroCountry}
              </span>
              <p className="font-decorative text-4xl md:text-6xl text-navy leading-tight my-2">
                {siteContent.name}
              </p>
              <div className="my-2 flex w-20 items-center gap-2" aria-hidden="true">
                <span className="h-px flex-1 bg-gold/60" />
                <svg width="7" height="7" viewBox="0 0 7 7" className="fill-gold shrink-0">
                  <polygon points="3.5,0 7,3.5 3.5,7 0,3.5" />
                </svg>
                <span className="h-px flex-1 bg-gold/60" />
              </div>
              <p className="font-display text-sm italic text-charcoal-soft">
                Welcome to my personal space
              </p>
            </div>

            {/* 3. Top flap — closed: above everything; open: folds back behind the letter */}
            <div
              className={`absolute inset-x-0 top-0 z-[30] origin-top transform-style-3d transition-transform duration-[800ms] ease-royal ${
                isFlapOpen ? 'z-[5]' : 'z-[30]'
              }`}
              style={{
                height: '52%',
                transform: isFlapOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
              }}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 680 229"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon
                  points="0,0 680,0 340,229"
                  className="fill-ivory-deep stroke-gold/45"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* 4. Front pocket — solid, fully hides the letter while sealed */}
            <div className="pointer-events-none absolute inset-0 z-[20]">
              <svg
                className="h-full w-full"
                viewBox="0 0 680 440"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* left fold */}
                <polygon
                  points="0,0 340,220 0,440"
                  className="fill-ivory-deep stroke-gold/40"
                  strokeWidth="1.5"
                />
                {/* right fold */}
                <polygon
                  points="680,0 340,220 680,440"
                  className="fill-ivory-deep stroke-gold/40"
                  strokeWidth="1.5"
                />
                {/* bottom fold sits on top of both side folds */}
                <polygon
                  points="0,440 340,210 680,440"
                  className="fill-ivory-deep stroke-gold/50"
                  strokeWidth="1.5"
                />
                {/* outer frame */}
                <rect
                  x="0.75"
                  y="0.75"
                  width="678.5"
                  height="438.5"
                  className="fill-none stroke-gold/40"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* 5. Wax seal */}
            {stage === 'sealed' && (
              <div className="absolute left-1/2 top-[46.5%] z-[40] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <button
                  type="button"
                  onClick={handleBreakSeal}
                  aria-label="Break the wax seal to open the letter"
                  className="group relative h-20 w-20 cursor-pointer md:h-24 md:w-24 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
                >
                  {/* melted outer rim — irregular pressed edge */}
                  <span
                    className="absolute inset-0 bg-[#7A1418] transition-transform duration-400 ease-royal group-hover:scale-[1.03] group-active:scale-95"
                    style={{
                      borderRadius:
                        '52% 48% 46% 54% / 49% 53% 47% 51%',
                      boxShadow:
                        '0 2px 6px rgba(46,4,6,0.35), 0 1px 0 rgba(214,120,124,0.35) inset',
                    }}
                    aria-hidden="true"
                  />
                  {/* squashed lip */}
                  <span
                    className="absolute inset-[6%] bg-[#8E1B20]"
                    style={{
                      borderRadius:
                        '48% 52% 53% 47% / 52% 47% 53% 48%',
                      boxShadow:
                        '0 1px 2px rgba(46,4,6,0.5) inset, 0 -1px 1px rgba(214,120,124,0.25) inset',
                    }}
                    aria-hidden="true"
                  />
                  {/* flat debossed floor — pressed in, not bulging */}
                  <span
                    className="absolute inset-[17%] flex items-center justify-center bg-[#6E1014]"
                    style={{
                      borderRadius: '50%',
                      boxShadow:
                        '0 3px 6px rgba(30,2,4,0.85) inset, 0 -2px 3px rgba(196,88,93,0.28) inset, 0 1px 0 rgba(214,120,124,0.18)',
                    }}
                  >
                    {/* engraved ring on the die face */}
                    <span
                      className="absolute inset-[13%] rounded-full border border-[#4A0709]/70"
                      style={{ boxShadow: '0 1px 1px rgba(200,90,95,0.25)' }}
                      aria-hidden="true"
                    />
                    {/* engraved K, flat and pressed into the floor */}
                    <span
                      className="relative font-display text-2xl font-semibold italic leading-none text-[#5E0C10] md:text-3xl"
                      style={{ textShadow: '0 1px 0 rgba(203,98,103,0.45)' }}
                    >
                      K
                    </span>
                  </span>
                </button>

                <span className="mt-4 rounded-sm border border-gold/30 bg-ivory px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-medium text-charcoal-soft">
                  Break seal to open
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
