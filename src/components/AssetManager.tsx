import coins from "@/lib/coins";
import Icons from "./Icons";
import { Button } from "./ui/button";
import { ArrowRightLeft, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function AssetManager({ className }: { className?: string }) {
  return (
    <main className={cn("flex flex-col items-center", className)}>
      <div className="size-60 relative z-10 flex items-center justify-center mb-6">
        <Icons.polygonFrame className="absolute top-0 left-0 w-full h-full -z-10" />
        <img src={coins.eth.logo} alt="" className="h-20" />
      </div>

      <Button variant="dark" className="font-thin mb-6">
        <span className="size-4 flex items-center justify-center bg-white/70 rounded-full mr-1">
          <img src={coins.eth.logo} alt="" className="h-[60%]" />
        </span>
        <span>Ethereum Network</span>
        <ChevronDown className="size-4" />
      </Button>

      <h1 className="flex items-end space-x-2.5 justify-center">
        <span className="text-7xl">0</span>
        <span className="text-3xl pb-1">ETH</span>
      </h1>

      <p className="opacity-70 text-center mt-2 text-xl">$0.00</p>

      <footer className="mt-10 flex items-center space-x-4 justify-center">
        <Button className="px-10">Send</Button>
        <Button variant="outline" className="bg-transparent px-10">
          Receive
        </Button>
        <Button size="icon" variant="outline" className="bg-transparent">
          <ArrowRightLeft className="size-4" />
        </Button>
      </footer>
    </main>
  );
}

export default AssetManager;
