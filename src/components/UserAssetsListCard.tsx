import coins from "@/lib/coins";
import Heading from "./Heading";

const AssetCard = ({ coin, balance }: { coin: string; balance: number }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-thin opacity-70 uppercase">{coin}</p>
        <p className="text-lg 2xl:text-2xl">{balance}</p>
      </div>

      <h2 className="text-lg 2xl:text-2xl">$128,500</h2>
    </div>
  );
};

const UserAssetsListCard = () => {
  return (
    <div className="bg-neutral-900 p-6 2xl:p-8 rounded-2xl">
      <header className="flex items-center justify-between">
        <Heading>Assets</Heading>

        <div className="flex items-center -space-x-2">
          {Object.keys(coins).map((coin) => (
            <img
              src={coins[coin].cartoonishLogo}
              className="h-7 2xl:h-9 border-2 border-neutral-900 rounded-full"
            />
          ))}
        </div>
      </header>

      <main className="space-y-3 mt-7">
        <AssetCard coin="BTC" balance={2.874} />
        <AssetCard coin="SOL" balance={12.846} />
        <AssetCard coin="ETH" balance={12.931} />
      </main>
    </div>
  );
};

export default UserAssetsListCard;
