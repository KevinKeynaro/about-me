import Navbar from './components/layout/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-body flex flex-col selection:bg-gold-light selection:text-navy">
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center border-b border-gold/20 px-6 py-20"
        >
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-charcoal-soft">
              Indonesia
            </span>
            <h1 className="font-decorative text-7xl md:text-9xl text-navy mt-4">
              Kevin Keynaro
            </h1>
          </div>
        </section>

        {/* Section 2: About */}
        <section
          id="about"
          className="min-h-[80vh] flex items-center justify-center border-b border-gold/20 px-6 py-20 bg-ivory"
        >
          <h2 className="font-display text-3xl text-navy">About</h2>
        </section>

        {/* Section 3: Identity */}
        <section
          id="identity"
          className="min-h-[80vh] flex items-center justify-center border-b border-gold/20 px-6 py-20 bg-ivory-deep"
        >
          <h2 className="font-display text-3xl text-navy">Identity</h2>
        </section>

        {/* Section 4: Reading */}
        <section
          id="reading"
          className="min-h-[80vh] flex items-center justify-center border-b border-gold/20 px-6 py-20 bg-ivory"
        >
          <h2 className="font-display text-3xl text-navy">Reading</h2>
        </section>

        {/* Section 5: Movies */}
        <section
          id="movies"
          className="min-h-[80vh] flex items-center justify-center border-b border-gold/20 px-6 py-20 bg-navy text-ivory"
        >
          <h2 className="font-display text-3xl text-ivory">Movies</h2>
        </section>

        {/* Section 6: Sports */}
        <section
          id="sports"
          className="min-h-[80vh] flex items-center justify-center px-6 py-20 bg-ivory"
        >
          <h2 className="font-display text-3xl text-navy">Sports</h2>
        </section>
      </main>

      <footer className="bg-navy-deep text-gold-light py-12 text-center border-t border-gold/30">
        <p className="font-decorative text-2xl">Kevin Keynaro</p>
      </footer>
    </div>
  )
}
