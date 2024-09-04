import Image from "next/image";
import Dashboard from "./components/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="my-5 text-3xl font-bold">Blockhouse Dashboard</h1>
      
      <Dashboard/>
    </main>
  );
}
