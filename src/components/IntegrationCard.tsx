import { BrandType } from "@/lib/brands";
import { Button } from "./ui/button";

interface IntegrationCardProps extends BrandType {}

const IntegrationCard = ({ brandLogo, brandName }: IntegrationCardProps) => {
  return (
    <div className="bg-neutral-900 rounded-xl py-4 2xl:py-7 px-6 2xl:px-8 flex sm:items-center justify-between sm:space-x-6 max-sm:flex-col max-sm:space-y-6">
      <main className="flex sm:items-center sm:space-x-5 max-sm:flex-col">
        <div className="size-10 2xl:size-8 rounded-full flex-shrink-0 max-sm:hidden">
          <img
            src={brandLogo}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center max-sm:space-x-3 max-sm:mb-3">
            <img
              src={brandLogo}
              className="size-10 object-cover rounded-full flex-shrink-0 sm:hidden"
              alt=""
            />

            <h2 className="text-lg 2xl:text-2xl mb-0 2xl:mb-1">{brandName}</h2>
          </div>
          <p className="opacity-60 font-thin">
            collaboration software. connect 3conomy to slack for timely payment
            approval notifications
          </p>
        </div>
      </main>

      <Button
        variant="outline"
        className="bg-transparent 2xl:max-w-[12rem] 2xl:w-full flex-shrink-0"
      >
        Set Up
      </Button>
    </div>
  );
};

export default IntegrationCard;
