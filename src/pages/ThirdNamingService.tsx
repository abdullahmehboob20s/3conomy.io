import Icons from "@/components/Icons";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
}

const Card = ({ title, description, Icon }: CardProps) => {
  return (
    <div className="rounded-2xl p-8 bg-neutral-900">
      <div className="size-14 rounded-full mb-6 bg-neutral-950 flex items-center justify-center">
        <Icon />
      </div>

      <h2 className="text-2xl mb-3">{title}</h2>

      <p className="opacity-40 font-light">{description}</p>
    </div>
  );
};

const DomainCard = ({ domainName }: { domainName: string }) => {
  return (
    <div className="bg-neutral-900 rounded-xl p-8">
      <div className="size-20 border border-neutral-600 bg-neutral-800 flex items-center justify-center rounded-full mx-auto mb-4">
        <Icons.etheruem />
      </div>

      <p className="capitalize text-center mb-2 opacity-60 font-thin">
        top-level domain
      </p>

      <h3 className="text-center text-2xl">{domainName}</h3>
    </div>
  );
};

function ThirdNamingService() {
  return (
    <div className="px-8 pt-20 pb-20">
      <header className="mb-14">
        <h1 className="text-center text-5xl mb-4">
          <span className="bg-clip-text bg-purple-to-blue text-transparent font-medium">
            Third Naming
          </span>{" "}
          Service
        </h1>
        <p className="text-center opacity-60 mb-8">
          Register your Top-Level Web3 Domain for $90/yr* & Sell Web3 Domains
        </p>

        <div className="max-w-[30rem] w-full rounded-full relative h-16 border mx-auto">
          <Search className="absolute top-1/2 left-9 -translate-y-1/2 size-5 pointer-events-none" />
          <ArrowRight className="absolute top-1/2 right-9 -translate-y-1/2 size-5 opacity-80 pointer-events-none" />

          <Input
            type="text"
            className="absolute top-0 left-0 w-full h-full bg-transparent rounded-full px-20 text-base"
            placeholder="Search Web3 Domains"
          />
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6 mb-20">
        <Card
          Icon={Icons.thunderFilledYellow}
          title="Stake TLD & Sell Web3 Domains"
          description="Stake your Top-Level Web3 Domain (TLD) and sell Web3 Domains that use your TLD. Set your registration fee and yearly renewal fee or opt for expiry-less Web3 Domains"
        />
        <Card
          Icon={Icons.computerCode}
          title="Privately Stake TLDs & Sell Exclusive Web3 Domains"
          description="Privately Stake your Top-Level Domain (TLD) and sell Web3 Domains to nominated Wallet Addresses or wallets which hold a nominated Token or NFT collection"
        />
        <Card
          Icon={Icons.shoppingCart}
          title="Create your Web3 Domains Registrar Pag"
          description="Add your logo, brand colors and allow Web3 Domain registrations from your selected TLDs within your Decentraweb hosted site"
        />
      </div>

      <div>
        <h1 className="text-3xl text-center mb-14">
          Recently Registered Top Level Domains
        </h1>

        <div className="grid grid-cols-4 gap-6">
          <DomainCard domainName=".boca" />
          <DomainCard domainName=".mia" />
          <DomainCard domainName=".ftl" />
          <DomainCard domainName=".wbp" />
          <DomainCard domainName=".delray" />
          <DomainCard domainName=".ecom" />
          <DomainCard domainName=".orlando" />
          <DomainCard domainName=".jax" />
          <DomainCard domainName=".tampa" />
          <DomainCard domainName=".quant" />
          <DomainCard domainName=".venture" />
          <DomainCard domainName=".liama" />
        </div>
      </div>
    </div>
  );
}

export default ThirdNamingService;
