"use client";

import type { ReactNode } from "react";

export default function BusinessPlanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </section>
  );
}
