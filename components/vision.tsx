export function Vision() {
  return (
    <section id="vision" className="py-32 relative bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Vision</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-8">
              A world of intelligent, distributed infrastructure
            </p>
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed text-center">
                Over the next five years, our goal is to expand globally and become a trusted partner for the management
                and evolution of digital infrastructures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold">Distributed Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Data no longer travels to a single center, but flows freely within an intelligent global network.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold">Micro Data Centers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An ecosystem of distributed micro-data centers capable of communicating, learning, and adapting.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold">Living System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Infrastructure that self-optimizes like a natural organism, ensuring faster and safer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
