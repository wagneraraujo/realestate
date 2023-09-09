import HeroBanner from "components/Home/components/heroBanner";
import DefaultLayout from "components/Layout/DefaultLayout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-100 h-auto flex flex-col">
      <DefaultLayout>
        <HeroBanner />
      </DefaultLayout>
    </main>
  );
}
