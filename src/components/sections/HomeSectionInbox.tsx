import CardInboxMessage from "../cards/CardInboxMessage";
import Pagination from "../shared/Pagination";
import HomeInboxTab from "../tabs/HomeInboxTab";

export default function HomeSectionInbox() {
  return (
    <section className="space-y-5 rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
      <h2 className="text-center text-xl font-bold">Inbox.</h2>
      <HomeInboxTab />
      <div className="space-y-2">
        {[...Array(5)].map((_, index) => (
          <CardInboxMessage key={index} />
        ))}
      </div>
      <Pagination />
    </section>
  );
}
