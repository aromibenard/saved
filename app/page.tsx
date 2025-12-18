import SavingsDashboard from "@/components/savings-dashboard";
import getCurrentBalance from "@/lib/data/getCurrentBalance";


export default async function Home() {
  const initialBalance = await getCurrentBalance();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between  py-18 md:py-20  px-6 md:px-16 bg-white dark:bg-black sm:items-start">
        <SavingsDashboard 
          initialBalance={initialBalance}
        />
      </main>
    </div>
  );
}
