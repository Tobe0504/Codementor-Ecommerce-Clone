"use client";

import { useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import { useRouter } from "next/navigation";

export default function Home() {
  // Router
  const router = useRouter();

  // Effects
  useEffect(() => {
    router.push("/women");
  }, []);

  return (
    <main>
      <Layout></Layout>
    </main>
  );
}
