export const metadata = {
  title: 'Blog & Articles | Nefe Clarke',
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <a href="/" className="text-cyan-400 text-sm font-medium">
          &larr; Back to home
        </a>

        <div className="mt-10 mb-16">
          <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">
            Writing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            Blog &amp; Articles
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Selected writing on climate, communication, and youth voices in
            Africa. Feature storytelling, essays, and commentary.
          </p>
        </div>

        {/* To add a new article later: copy one card block below, paste it
            underneath, and change the tag, title, description, and link. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            href="https://nefeclarke-star.github.io/portfolio/flood-article.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
          >
            <span className="text-cyan-400 font-medium uppercase tracking-wider text-xs">
              Opinion
            </span>
            <h2 className="text-xl font-bold mt-3 mb-3">
              The Flood Came Again. So Did the Young People.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Every rainy season parts of Lagos go underwater. What is changing
              is who is responding, and how.
            </p>
            <span className="text-cyan-400 text-sm font-medium">
              Read article &rarr;
            </span>
          </a>

          
            href="https://nefeclarke-star.github.io/portfolio/listening-article.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
          >
            <span className="text-cyan-400 font-medium uppercase tracking-wider text-xs">
              Essay
            </span>
            <h2 className="text-xl font-bold mt-3 mb-3">
              What Street Interviews Taught Me About Listening
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              My first media job was holding a microphone up to strangers. The
              hard part was never getting people to talk.
            </p>
            <span className="text-cyan-400 text-sm font-medium">
              Read article &rarr;
            </span>
          </a>

          
            href="https://nefeclarke-star.github.io/portfolio/groupchat-article.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
          >
            <span className="text-cyan-400 font-medium uppercase tracking-wider text-xs">
              Commentary
            </span>
            <h2 className="text-xl font-bold mt-3 mb-3">
              The Group Chat Is Doing More Than Your Press Release
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The fastest climate information network in my city has no budget
              and no strategy. There is a lesson in that.
            </p>
            <span className="text-cyan-400 text-sm font-medium">
              Read article &rarr;
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
