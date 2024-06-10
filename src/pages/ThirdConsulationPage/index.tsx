import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

function ThirdConsulationPage() {
  return (
    <div>
      <Container className="border-b border-white/20 px-10 flex items-center [&>*]:flex-shrink-0 overflow-auto hide-scrollbar space-x-8 h-auto max-lg:py-4 lg:py-0 lg:h-20">
        <button>Consultation</button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="!p-0 !h-auto group">
              <span>Services</span>
              <DropdownMenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={10}
            className="w-[260px]"
          >
            <DropdownMenuLabel>Services</DropdownMenuLabel>
            <DropdownMenuItem>Artificial Intelligence</DropdownMenuItem>
            <DropdownMenuItem>Blockchain & Crypto</DropdownMenuItem>
            <DropdownMenuItem>Institutional Fintech</DropdownMenuItem>
            <DropdownMenuItem>Cybersecurity</DropdownMenuItem>
            <DropdownMenuItem>Quantum Solutions</DropdownMenuItem>
            <DropdownMenuItem>Tokenomics/CBDC’s</DropdownMenuItem>
            <DropdownMenuItem>IoT & Smart City/DePIN</DropdownMenuItem>
            <DropdownMenuItem>Decentralized Multicloud</DropdownMenuItem>
            <DropdownMenuItem>Workforce 3.0</DropdownMenuItem>
            <DropdownMenuItem>Supply Chain/RWA’s</DropdownMenuItem>
            <DropdownMenuItem>ML/DL</DropdownMenuItem>
            <DropdownMenuItem>3D Printing</DropdownMenuItem>
            <DropdownMenuItem>Renewables</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" className="!h-auto !p-0">
          <span>Industries</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <Button variant="ghost" className="!h-auto !p-0">
          <span>Strategic Partners</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <Button variant="ghost" className="!h-auto !p-0">
          <span>Featured Insights</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <button>Careers</button>
      </Container>

      <Container className="px-10">
        <p className="text-xl 2xl:text-2xl mb-6 capitalize opacity-70">
          who we are?
        </p>

        <Heading className="max-sm:text-base lh-1.5">
          Third Consulting is the only major global consultancy that sits within
          a technology company. With principles grounded in open innovation,
          collaboration and trust, we don't just advise. We work side by side to
          design, build, and operate high-performing businesses together with
          our clients and partners.
        </Heading>
      </Container>

      <Button
        variant="secondary"
        className="absolute bottom-10 right-12 max-w-[8rem] w-full"
      >
        Let's Talk
      </Button>
    </div>
  );
}

export default ThirdConsulationPage;
