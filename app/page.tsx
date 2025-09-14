
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <header className="w-full flex justify-center pt-8 pb-4">
        <h1
          className="text-4xl sm:text-6xl font-extrabold text-center text-neutral-900 dark:text-neutral-100 tracking-tight"
          style={{ fontFamily: 'Gotham, var(--font-geist-sans), Arial, sans-serif' }}
        >
          Data Visualisation :{' '}
          <span className="font-thin" style={{ fontFamily: 'Gotham, var(--font-geist-sans), Arial, sans-serif' }}>
            Comparative Visualizations
          </span>
        </h1>
      </header>
    </main>
  );
}
