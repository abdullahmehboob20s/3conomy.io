import { BrandType } from "@/lib/brands";
import { Button } from "./ui/button";

interface IntegrationCardProps extends BrandType {}

const IntegrationCard = ({ brandLogo, brandName }: IntegrationCardProps) => {
  return (
    <div className="bg-neutral-900 rounded-xl py-7 px-8 flex items-center justify-between">
      <main className="flex items-center space-x-5">
        <div className="size-8 rounded-full flex-shrink-0">
          <img
            src={brandLogo}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl mb-1">{brandName}</h2>
          <p className="opacity-60 font-thin">
            collaboration software. connect 3conomy to slack for timely payment
            approval notifications
          </p>
        </div>
      </main>

      <Button
        variant="outline"
        className="bg-transparent max-w-[12rem] w-full flex-shrink-0"
      >
        Set Up
      </Button>
    </div>
  );
};

export default IntegrationCard;
