"use client";

import Navbar from "@/components/shared/Navbar";
import useMounted from "./hooks/useMounted";
import SkeletonHome from "@/components/skeleton/SkeletonHome";

export default function Home() {
  const { mounted } = useMounted();

  if (!mounted) return <SkeletonHome />;

  return (
    <>
      <Navbar />
    </>
  );
}
