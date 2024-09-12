"use client";

import Navbar from "@/components/shared/Navbar";
import SkeletonHome from "@/components/skeleton/SkeletonHome";
import useMounted from "@/hooks/useMounted";

export default function Home() {
  const { mounted } = useMounted();

  if (!mounted) return <SkeletonHome />;

  return (
    <>
      <Navbar />
    </>
  );
}
