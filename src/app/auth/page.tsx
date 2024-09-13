"use client";

import IconApple from "@/components/icons/IconApple";
import IconGoogle from "@/components/icons/IconGoogle";
import IconLogo from "@/components/icons/IconLogo";
import { Button } from "@headlessui/react";

export default function AuthPage() {
  return (
    <div className="flex min-h-[90vh] w-full items-center justify-center">
      <section className="w-full rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
        <div className="flex flex-col items-center justify-center">
          <IconLogo className="size-10" />
          <h1 className="text-3xl font-semibold">Log in to your account</h1>
        </div>
        <p className="mb-2 mt-10 text-center dark:text-zinc-400">
          Connect to Cypher app with:
        </p>
        <div className="space-y-1 text-zinc-50">
          <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2 transition-all duration-150 hover:bg-zinc-700 active:scale-95">
            <IconGoogle className="size-4" />
            <span>Google</span>
          </Button>
          <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 py-2 transition-all duration-150 hover:bg-zinc-700 active:scale-95">
            <IconApple className="size-4" />
            <span>Apple ID</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
