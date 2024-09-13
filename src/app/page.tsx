"use client";

import HomeSectionInbox from "@/components/home/sections/HomeSectionInbox";
import HomeSectionUser from "@/components/home/sections/HomeSectionUser";
import SkeletonHome from "@/components/home/skeleton/SkeletonHome";
import Navbar from "@/components/shared/Navbar";
import useMounted from "@/hooks/useMounted";

export default function HomePage() {
  const { mounted } = useMounted();

  if (!mounted) return <SkeletonHome />;

  return (
    <div className="flex">
      <main className="space-y-5">
        <Navbar />
        <HomeSectionUser />
        <HomeSectionInbox />
      </main>
    </div>
  );
}
