import { cn } from "@/lib/utils";
import Icons from "./Icons";
import { Button } from "./ui/button";

function NftCard({
  nftImage,
  collectionName,
  featured = false,
}: {
  nftImage: string;
  collectionName: string;
  featured?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-neutral-900 overflow-hidden aspect-square flex flex-col w-full h-auto">
      <div className="flex-1 relative">
        <img
          src={nftImage}
          className="w-full h-full absolute top-0 left-0 object-cover z-10"
          alt=""
        />

        <div className="absolute top-0 left-0 w-full h-full p-6 z-20 flex flex-col justify-end">
          {featured ? (
            <p className="capitalize text-lg mb-2 opacity-90">by: third team</p>
          ) : null}
          <p className={cn("text-xl", featured ? "text-3xl" : null)}>
            <span className="align-middle mr-1">{collectionName}</span>{" "}
            <Icons.verifiedFilled className="size-[.9em] inline-block align-middle" />
          </p>{" "}
          {featured ? (
            <Button variant="secondary" className="w-fit mt-6">
              Minting Now
            </Button>
          ) : null}
        </div>
      </div>

      {featured === false ? (
        <footer className="p-4 flex items-center justify-between">
          <p>
            <span className="text-sm opacity-60 block">Floor:</span>
            <span className="text-base">0.07 ETH</span>
          </p>

          <p className="text-right">
            <span className="text-sm opacity-60 block">Total Volume</span>
            <span className="text-base">2749 ETH</span>
          </p>
        </footer>
      ) : null}
    </div>
  );
}

export default NftCard;
