import Icons from "@/components/Icons";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
}

const Card = ({ title, description, Icon }: CardProps) => {
  return (
    <div className="p-8 pt-12 bg-neutral-900 rounded-2xl relative overflow-hidden">
      <div className="size-28 absolute -top-3 -right-3 pointer-events-none rotate-[15deg] opacity-10">
        <Icon className="w-full h-full z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900"></div>
      </div>

      <div className="flex items-center space-x-4 mb-5">
        <Icon className="size-6" />
        <p className="text-3xl">{title}</p>
      </div>

      <p className="opacity-60 mb-8 w-[80%]">{description}</p>

      <div className="flex items-center justify-between">
        <a href="#" className="underline opacity-80">
          Learn More
        </a>

        <Button className="px-0 max-w-[6rem] w-full">Go</Button>
      </div>
    </div>
  );
};

function ThirdLaunchPage() {
  return (
    <div className="px-8 pt-14 pb-20">
      <header className="mb-12">
        <div className="flex items-center justify-center space-x-4">
          <Icons.pencilBox />
          <p className="text-5xl">Create</p>
        </div>
        <p className="mt-5 text-center opacity-70">ICO & NFT Launchpad</p>
      </header>

      <main className="grid grid-cols-2 gap-8">
        <Card
          title="Drop"
          description="A drop is the release of a new project. This
usually happens on a specified date and
time. Items will be revealed after they have
been purchased."
          Icon={Icons.grid}
        />
        <Card
          title="Collection or Item"
          description="Create a new NFT collection or add an NFT
to an existing one. Your items will display
immediately. List for sale when you're
ready."
          Icon={Icons.img}
        />
      </main>
    </div>
  );
}

export default ThirdLaunchPage;
