import AssetManager from "@/components/AssetManager";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { DataTable } from "./components/data-table";
import tasks from "./data/tasks";
import { columns } from "./components/columns";
import Heading from "@/components/Heading";
import Container from "@/components/Container";

const StatCard = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <p className="text-center opacity-60 max-2xl:text-sm capitalize">
        {title}
      </p>
      <p className="text-center text-base 2xl:text-xl capitalize">{subtitle}</p>
    </div>
  );
};

function ThirdSecuritiesExchangePage() {
  return (
    <Container>
      <AssetManager className="mb-10" />

      <div className="mb-6">
        <header className="flex items-center justify-between mb-12">
          <Heading>Price Chart</Heading>
          <Button size="sm" variant="outline">
            <span>Month</span> <ChevronDown className="size-4" />
          </Button>
        </header>

        <main className="flex items-center justify-between pb-6 border-b border-white/10 space-x-6 [&>*]:flex-shrink-0 overflow-auto hide-scrollbar">
          <StatCard title="24H Change" subtitle="+30.99" />
          <StatCard title="highest balance" subtitle="$1,826.43" />
          <StatCard title="portfolio age" subtitle="2 month, 20 days" />
          <StatCard title="best 24H asset" subtitle="algorand" />
          <StatCard title="worst 24H asset" subtitle="solana -1.77%" />
        </main>
      </div>

      <div className="flex items-center space-x-8 mb-6">
        <Button variant="ghost" className="p-0 h-auto">
          Overview
        </Button>
        <Button variant="ghost" className="p-0 h-auto" disabled>
          Price Action
        </Button>
        <Button variant="ghost" className="p-0 h-auto" disabled>
          Portfolio
        </Button>
      </div>

      <DataTable data={tasks} columns={columns} />
    </Container>
  );
}

export default ThirdSecuritiesExchangePage;
