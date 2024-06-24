import  { useState } from 'react';
import coins from "@/lib/coins";
import Icons from "./Icons";
import { Button } from "./ui/button";
import { ArrowRightLeft, ChevronDown} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AssetManager({ className }: { className?: string }) {
  const [isOnrampOpen, setIsOnrampOpen] = useState(false);

  return (
    <main className={cn("flex flex-col items-center", className)}>
      <div className="size-36 lg:size-44 2xl:size-60 relative z-10 flex items-center justify-center mb-6">
        <Icons.polygonFrame className="absolute top-0 left-0 w-full h-full -z-10" />
        <img src={coins.eth.logo} alt="" className="h-[40%]" />
      </div>
      <Button variant="dark" className="font-thin mb-5 2xl:mb-6">
        <span className="size-4 flex items-center justify-center bg-white/70 rounded-full mr-1">
          <img src={coins.eth.logo} alt="" className="h-[60%]" />
        </span>
        <span>Ethereum Network</span>
        <ChevronDown className="size-4" />
      </Button>
      <h1 className="flex items-end space-x-2.5 justify-center">
        <span className="text-6xl 2xl:text-7xl">0</span>
        <span className="text-2xl 2xl:text-3xl pb-1">ETH</span>
      </h1>
      <p className="opacity-70 text-center mt-2 text-lg 2xl:text-xl">$0.00</p>
      <footer className="mt-7 2xl:mt-10 flex items-center space-x-4 justify-center">
        <Button className="px-10">Send</Button>
        <Button variant="outline" className="bg-transparent px-10">
          Receive
        </Button>
        <Dialog open={isOnrampOpen} onOpenChange={setIsOnrampOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="bg-transparent max-sm:hidden"
            >
              <ArrowRightLeft className="size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Buy or Sell any Crypto</DialogTitle>
            </DialogHeader>
            <iframe
              src="https://onramp.money/main/buy/?appId=1"
              width="100%"
              height="500px"
            />
          </DialogContent>
        </Dialog>
      </footer>
    </main>
  );
}

export default AssetManager;