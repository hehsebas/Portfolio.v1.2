"use client"

import Cover from "../components/cover";
import TransitionPage from "../components/transition-page";
import Introduction from "../components/introduction";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <TransitionPage/>
      <div className="relative w-full min-h-screen bg-gradient-full bg-no-repeat bg-[linear-gradient(180.21deg,rgba(10,24,124,0.5)_-5.91%,rgba(74,47,10,0.5)_111.58%)]">
        <Cover/>
        <Introduction/>
      </div>
    </main>
  );
}