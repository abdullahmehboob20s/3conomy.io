import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Icons from "./Icons";

const BalanceCard = () => {
  return (
    <div className="bg-neutral-900 p-8 rounded-2xl">
      <header className="flex items-center justify-between">
        <div>
          <p className="opacity-70 mb-2 font-thin">Total Balance</p>
          <h1 className="text-4xl">1,350,000</h1>
        </div>

        <Button variant="outline" className="bg-transparent" size="sm">
          <span>Month</span>
          <ChevronDown className="size-4" />
        </Button>
      </header>

      <div className="flex items-end justify-between mt-10 space-x-20">
        <div className="flex items-center space-x-3">
          <Icons.paperMoney />
          <span>Cash</span>
        </div>

        <Icons.chart className="w-full h-full" />
      </div>
    </div>
  );
};

export default BalanceCard;
