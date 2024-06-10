import AssetManager from "@/components/AssetManager";
import BalanceCard from "@/components/BalanceCard";
import Container from "@/components/Container";
import IntegrationCard from "@/components/IntegrationCard";
import UserAssetsListCard from "@/components/UserAssetsListCard";
import brands from "@/lib/brands";

const UserCoinCard = () => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 2xl:p-10 row-span-2 flex items-center justify-center">
      <AssetManager />
    </div>
  );
};

function DashboardPage() {
  return (
    <Container>
      <main className="grid grid-cols-[.6fr_1fr] gap-4 mb-6 max-lg:hidden">
        <BalanceCard />
        <UserCoinCard />
        <UserAssetsListCard />
      </main>

      <main className="space-y-6">
        {Object.keys(brands).map((brand) => (
          <IntegrationCard
            key={brand}
            brandLogo={brands[brand].brandLogo}
            brandName={brands[brand].brandName}
          />
        ))}
      </main>
    </Container>
  );
}

export default DashboardPage;
