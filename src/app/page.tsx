"use client";

import HomeSectionInbox from "@/components/sections/HomeSectionInbox";
import HomeSectionUser from "@/components/sections/HomeSectionUser";
import Navbar from "@/components/shared/Navbar";
import SkeletonHome from "@/components/skeleton/SkeletonHome";
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
      {/* <SkeletonHome /> */}
    </div>
  );
}
