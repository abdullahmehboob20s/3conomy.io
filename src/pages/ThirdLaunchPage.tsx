import Container from "@/components/Container";
import Heading from "@/components/Heading";
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
    <div className="flex flex-col p-8 2xl:pt-12 bg-neutral-900 rounded-2xl relative overflow-hidden">
      <main className="flex-1">
        <div className="size-28 absolute -top-3 -right-3 pointer-events-none rotate-[15deg] opacity-10">
          <Icon className="w-full h-full z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900"></div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4 mb-5">
          <Icon className="size-5 sm:size-6" />
          <Heading>{title}</Heading>
        </div>

        <p className="opacity-60 mb-8 lg:w-[80%]">{description}</p>
      </main>

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
    <Container>
      <header className="mb-10 lg:mb-12 max-lg:mt-3 2xl:pt-6">
        <div className="flex items-center justify-center space-x-4">
          <Icons.pencilBox className="max-lg:size-6" />
          <p className="text-3xl lg:text-4xl 2xl:text-5xl">Create</p>
        </div>
        <p className="mt-3 lg:mt-5 text-center opacity-70">
          ICO & NFT Launchpad
        </p>
      </header>

      <main className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr));] gap-8">
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
    </Container>
  );
}

export default ThirdLaunchPage;
