import Icons from "@/components/Icons";
import NftCard from "@/components/NftCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

const Card = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="/images/nfts/1.png"
        className="size-14 rounded-xl flex-shrink-0"
        alt=""
      />
      <div className="flex-1">
        <p className="text-sm mb-1 flex items-center space-x-1">
          <span className="truncate max-w-[8rem]">Clone X</span>
          <Icons.verifiedFilled className="size-3 flex-shrink-0" />
        </p>
        <p className="opacity-60 font-thin text-xs">Floor: 0.07 ETH</p>
      </div>
    </div>
  );
};

function ThirdNftExchangePage() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-6">
        <Tabs defaultValue="all" className="col-span-1">
          <TabsList className="h-auto w-fit p-0 bg-transparent">
            <TabsTrigger variant="white" value="all">
              ALL
            </TabsTrigger>
            <TabsTrigger variant="white" value="art">
              ART
            </TabsTrigger>
            <TabsTrigger variant="white" value="membership">
              MEMBERSHIP
            </TabsTrigger>
            <TabsTrigger variant="white" value="real-state">
              REAL STATE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <p>Account</p>
          </TabsContent>
          <TabsContent value="password">
            <p>password</p>
          </TabsContent>
        </Tabs>

        <div className="col-span-2 flex items-center justify-between">
          <p className="capitalize text-3xl">reit.sol</p>

          <Button variant="ghost" className="p-0 h-auto">
            <span>View All</span> <ChevronRight className="size-4" />
          </Button>
        </div>

        <NftCard
          featured={true}
          nftImage="/images/nfts/1.png"
          collectionName="Get Based “Based Summer” Poster"
        />
        <NftCard nftImage="/images/nfts/1.png" collectionName="SmallBrosNFT" />
        <NftCard nftImage="/images/nfts/2.png" collectionName="SmallCubes" />

        <div className="col-span-1 flex items-center justify-between">
          <Tabs defaultValue="trending">
            <TabsList className="h-auto bg-neutral-900 rounded-full [&>*]:rounded-full p-1.5">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="top">Top</TabsTrigger>
            </TabsList>

            <TabsContent value="account"></TabsContent>
            <TabsContent value="password"></TabsContent>
          </Tabs>

          <Button variant="ghost" className="p-0 h-auto">
            <span>View All</span> <ChevronRight className="size-4" />
          </Button>
        </div>

        <div className="col-span-2 flex items-center justify-between">
          <h2 className="text-3xl">Best Offers</h2>
          <Button variant="ghost" className="p-0 h-auto">
            <span>View All</span> <ChevronRight className="size-4" />
          </Button>
        </div>

        <div className="col-span-1">
          <header className="grid grid-cols-2 gap-4 mb-4">
            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">All Chains</SelectItem>
                  <SelectItem value="banana">Etheruem Chain</SelectItem>
                  <SelectItem value="blueberry">Solana Chain</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select defaultValue="apple">
              <SelectTrigger>
                <SelectValue placeholder="Select a duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">24H</SelectItem>
                  <SelectItem value="banana">12H</SelectItem>
                  <SelectItem value="blueberry">6H</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </header>

          <table className="w-full [&_td]:py-3">
            <thead>
              <tr className="border-b [&_td]:opacity-50">
                <td className="w-[1rem]">#</td>
                <td className="px-5">Collection</td>
                <td className="w-[5rem] text-center">Volume</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td className="px-5">
                  <Card />
                </td>
                <td className="text-center text-sm">23 ETH</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="px-5">
                  <Card />
                </td>
                <td className="text-center text-sm">23 ETH</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="px-5">
                  <Card />
                </td>
                <td className="text-center text-sm">23 ETH</td>
              </tr>
            </tbody>
          </table>
        </div>

        <NftCard nftImage="/images/nfts/3.png" collectionName="SmallBrosNFT" />
        <NftCard nftImage="/images/nfts/4.png" collectionName="SmallCubes" />
      </div>
    </div>
  );
}

export default ThirdNftExchangePage;
