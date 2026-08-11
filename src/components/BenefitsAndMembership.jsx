const lowStockBooks = [
  {
    title: 'The Big Shot Trader',
    author: 'Mitesh Desai',
    left: '4 left',
  },
  {
    title: 'From These Broken Pieces',
    author: 'Katie Hauck Ministries',
    left: '5 left',
  },
  {
    title: 'The Big Yank (Splash!)',
    author: 'Sandy Hoag',
    left: '5 left',
  },
];

const BenefitsAndMembership = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-slate-100/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-pink-500/20 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
              Shelf Alerts
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-600 mt-2 mb-8">
              Borrow Soon: Low Stock Titles
            </h2>

            <div className="space-y-4">
              {lowStockBooks.map((book, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-slate-200/90 border border-slate-200/60 rounded-2xl p-4 transition-all duration-300 hover:border-pink-700/40"
                >
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-700">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {book.author}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-pink-500 bg-pink-700/10 border border-pink-600/30 px-3 py-1.5 rounded-full">
                    {book.left}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-600/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-pink-500/20 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
              Membership
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-2">
              Get Membership & Save More
            </h2>
            <p className="text-slate-300 text-sm mb-8">
              Pick a plan that fits your reading pace and unlock member-only borrowing perks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      
              <div className="bg-slate-900/90 border border-slate-700/60 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Reader Basic
                  </span>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-white">$5</span>
                    <span className="text-xs text-slate-400"> / per month</span>
                  </div>
                  <ul className="mt-4 space-y-1 text-xs text-slate-300">
                    <li>• 2 active borrows</li>
                    <li>• Standard reservations</li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-slate-900/90 border-2 border-pink-500 rounded-2xl p-5 flex flex-col justify-between shadow-lg shadow-pink-500/10">
                <span className="absolute -top-3 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Most Chosen
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
                    Reader Plus
                  </span>
                  <div className="mt-2">
                    <span className="text-3xl font-extrabold text-white">$12</span>
                    <span className="text-xs text-slate-400"> / per 3 months</span>
                  </div>
                  <ul className="mt-4 space-y-1 text-xs text-slate-300">
                    <li>• 5 active borrows</li>
                    <li>• Priority reservations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-4 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Included Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div>• Free late fee grace: 3 days</div>
                <div>• Member-only book alerts</div>
                <div>• Early access to new arrivals</div>
                <div>• Quarterly reading badge rewards</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:opacity-95 transition-opacity shadow-lg shadow-pink-500/20">
              Activate Membership
            </button>
            <button className="w-full py-3 px-4 rounded-xl font-bold text-sm text-pink-400 bg-slate-900 border border-pink-500/40 hover:bg-slate-800 transition-colors">
              Browse Member Picks
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsAndMembership;