import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import Icons from "./Icons";

const BalanceCard = () => {
  return (
    <div className="bg-neutral-900 p-6 2xl:p-8 rounded-2xl flex flex-col justify-between">
      <header className="flex max-sm:flex-col sm:items-center sm:justify-between max-sm:space-y-4">
        <div>
          <p className="opacity-70 mb-2 font-thin">Total Balance</p>
          <h1 className="text-3xl 2xl:text-4xl">1,350,000</h1>
        </div>

        <Button
          variant="outline"
          className="bg-transparent max-sm:w-fit"
          size="sm"
        >
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
