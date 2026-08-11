const steps = [
  {
    number: '01',
    title: 'Smart Book Picks',
    description:
      'Get thoughtful recommendations from top-rated titles based on your reading style.',
  },
  {
    number: '02',
    title: 'Quality Collection',
    description:
      'Build your reading habit from verified books across story, tech, and science shelves.',
  },
  {
    number: '03',
    title: 'Remote Borrowing',
    description:
      'Borrow books from anywhere and manage your list online with a smooth workflow.',
  },
  {
    number: '04',
    title: 'Reader Support',
    description:
      'Track due dates, update your profile, and keep your reading goals on schedule.',
  },
];

const HowItWorks = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl bg-slate-100/80 backdrop-blur-md rounded-3xl p-8 md:p-14 border border-pink-500/20 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-4 tracking-tight">
            Start your journey with us
          </h2>
          <p className="text-slate-800 text-sm md:text-base leading-relaxed">
            Discover a modern way to borrow and enjoy books. Learn, explore, and grow your reading habit with curated picks and smooth support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-200/90 rounded-2xl p-6 border border-slate-100/60 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-sm shadow-md shadow-pink-500/20">
                    {step.number}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-600 group-hover:text-pink-400 transition-colors leading-snug pt-1">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;