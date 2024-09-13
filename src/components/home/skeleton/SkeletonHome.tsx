export default function SkeletonHome() {
  return (
    <main className="space-y-5 text-transparent">
      <section className="flex justify-between rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
        <div className="flex animate-pulse items-center gap-[5px] rounded-full bg-zinc-200 dark:bg-zinc-800">
          <span className="text-2xl font-semibold">Cypher.</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="animate-pulse rounded-lg bg-zinc-200 p-1 dark:bg-zinc-800">
            <div className="size-7"></div>
          </div>
          <div className="animate-pulse rounded-full bg-zinc-200 p-1 dark:bg-zinc-800">
            <div className="size-8"></div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-zinc-50 p-5 shadow-md transition-colors duration-150 dark:bg-zinc-900">
        <h2 className="w-fit animate-pulse rounded-full bg-zinc-200 text-lg font-semibold dark:bg-zinc-800">
          Good Morning, User
        </h2>
        <p className="mt-1 w-fit animate-pulse rounded-full bg-zinc-200 font-semibold dark:bg-zinc-800">
          Share the link below to receive messages
        </p>
        <div className="mt-4 flex justify-between gap-2">
          <div className="h-12 w-full animate-pulse rounded-lg bg-zinc-200 px-4 py-2 dark:bg-zinc-800"></div>
          <div className="h-12 w-11 animate-pulse rounded-lg bg-zinc-200 px-4 py-2 dark:bg-zinc-800"></div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-2 rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
        <h2 className="w-fit animate-pulse rounded-full bg-zinc-200 text-center text-2xl font-bold dark:bg-zinc-800">
          Inbox.
        </h2>
        <div className="my-5 h-10 w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="h-20 w-full animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800"
          ></div>
        ))}
      </section>
    </main>
  );
}
