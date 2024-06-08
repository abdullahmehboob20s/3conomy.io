import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function ThirdConsulationPage() {
  return (
    <div>
      <header className="border-b border-white/20 px-10 flex items-center space-x-8 h-20">
        <button>Consultation</button>
        <Button variant="ghost" className="h-auto p-0">
          <span>Services</span> <ChevronDown className="size-4 opacity-80" />
        </Button>
        <Button variant="ghost" className="h-auto p-0">
          <span>Industries</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <Button variant="ghost" className="h-auto p-0">
          <span>Strategic Partners</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <Button variant="ghost" className="h-auto p-0">
          <span>Featured Insights</span>
          <ChevronDown className="size-4 opacity-80" />
        </Button>
        <button>Careers</button>
      </header>

      <main className="px-10 py-14">
        <p className="text-2xl mb-6 capitalize opacity-70">who we are?</p>

        <p className="text-3xl lh-1.5">
          Third Consulting is the only major global consultancy that sits within
          a technology company. With principles grounded in open innovation,
          collaboration and trust, we don't just advise. We work side by side to
          design, build, and operate high-performing businesses together with
          our clients and partners.
        </p>
      </main>

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