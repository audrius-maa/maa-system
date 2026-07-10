export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 px-6 py-12">
      <div className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-sky-200 bg-white text-4xl shadow-lg">
          🌀
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Mokymosi ekosistema
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Light Academy OS
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600 md:text-2xl">
          Viena platforma. Viena paskyra. Viena mokymosi kelionė.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700">
            Prisijungti
          </button>

          <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-sky-400">
            Susipažinti
          </button>
        </div>

        <div className="mt-16 grid w-full max-w-4xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white bg-white/80 p-6 text-left shadow-sm">
            <p className="text-sm font-semibold text-sky-700">MAA</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              Mentalinė aritmetika
            </h2>
            <p className="mt-3 text-slate-600">
              Dėmesiui, atminčiai ir greitam mąstymui.
            </p>
          </div>

          <div className="rounded-3xl border border-white bg-white/80 p-6 text-left shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">FMA</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              Finansinis mąstymas
            </h2>
            <p className="mt-3 text-slate-600">
              Vertės kūrimui ir išmintingiems sprendimams.
            </p>
          </div>

          <div className="rounded-3xl border border-white bg-white/80 p-6 text-left shadow-sm">
            <p className="text-sm font-semibold text-violet-700">AAA</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              Asmenybės atpažinimas
            </h2>
            <p className="mt-3 text-slate-600">
              Stiprybėms, savęs pažinimui ir krypčiai.
            </p>
          </div>
        </div>

        <p className="mt-14 text-sm text-slate-400">
          Light Academy OS · versija 0.1
        </p>
      </div>
    </main>
  );
}