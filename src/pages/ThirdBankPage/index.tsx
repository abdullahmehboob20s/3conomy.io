import BalanceCard from "@/components/BalanceCard";
import Container from "@/components/Container";
import UserAssetsListCard from "@/components/UserAssetsListCard";

const ThirdCard = () => {
  return (
    <div className="bg-neutral-900 rounded-2xl flex flex-col overflow-hidden">
      <main className="p-6 2xl:p-8 bg-primary flex-1 flex flex-col space-y-5 relative z-10 overflow-hidden">
        <div className="flex-1">
          <h2 className="text-xl">Third card</h2>
        </div>

        <div>
          <p className="capitalize text-sm opacity-60 mb-1.5">credit limit</p>
          <p className="text-3xl 2xl:text-4xl">100,000.00</p>
        </div>

        <img
          src="/images/3conomy-3.svg"
          className="absolute -bottom-[12%] -right-[6%] h-full -z-10 opacity-20"
          alt=""
        />
      </main>

      <footer className="p-6 2xl:p-8 flex items-center justify-between">
        <p className="text-lg">3conomy</p>
        <img src="/images/3conomy-3.svg" className="h-6" alt="" />
      </footer>
    </div>
  );
};

function ThirdBank() {
  return (
    <Container className="grid gap-8">
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        <ThirdCard />
        <BalanceCard />
        <UserAssetsListCard />
      </div>

      <div className="col-span-full bg-neutral-900 p-20 rounded-2xl">
        <p className="text-center text-2xl capitalize">
          Third Pay <span className="opacity-40">(coming soon)</span>
        </p>
      </div>
    </Container>
  );
}

export default ThirdBank;
