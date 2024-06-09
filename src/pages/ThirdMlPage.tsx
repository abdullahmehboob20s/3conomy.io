import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  ArrowDown,
  ArrowUp,
  Braces,
  ChevronDown,
  Code,
  EllipsisVertical,
  Files,
  FolderOpen,
  Key,
  Link,
  List,
  MessageSquareMore,
  MessageSquareMoreIcon,
  Play,
  Plus,
  Search,
  Settings,
  SquareGanttChart,
  SquareTerminal,
  Star,
  Trash2,
  Users,
} from "lucide-react";

interface SidebarButtonProps {
  Icon: any;
}

const SidebarButton = ({ Icon }: SidebarButtonProps) => {
  return (
    <button>
      <Icon className="size-5" />
    </button>
  );
};

const Card = () => {
  return (
    <div className="bg-neutral-900 rounded-xl p-2 flex items-center space-x-4">
      <div className="size-14 rounded-md bg-neutral-950 flex items-center justify-center">
        <Play />
      </div>

      <p className="capitalize opacity-80">
        start coding or generate with AI...
      </p>
    </div>
  );
};

function ThirdMlPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] grid grid-cols-[72px_1fr]">
      <aside className="border-r-2 border-white/5 flex flex-col items-center justify-between py-10">
        <div className="space-y-7 flex flex-col">
          <SidebarButton Icon={List} />
          <SidebarButton Icon={Search} />
          <SidebarButton Icon={Braces} />
          <SidebarButton Icon={Key} />
          <SidebarButton Icon={FolderOpen} />
        </div>

        <div className="space-y-7 flex flex-col">
          <SidebarButton Icon={Code} />
          <SidebarButton Icon={SquareTerminal} />
          <SidebarButton Icon={SquareGanttChart} />
        </div>
      </aside>

      <main>
        <header className="p-6 pb-0">
          <h2 className="text-3xl relative w-fit pr-4 mb-3">
            Untitled3.ipynb
            <button className="absolute top-1/2 left-full -translate-y-1/2 flex opacity-40">
              <Star />
            </button>
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 [&>*]:opacity-60 [&>*:hover]:opacity-100 font-thin">
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Insert</button>
              <button>Runtime</button>
              <button>Tools</button>
              <button>Help</button>
            </div>

            <aside className="flex items-center space-x-8">
              <Button className="p-0 h-auto" variant="ghost">
                <MessageSquareMore className="size-5" />
                <span>Comment</span>
              </Button>
              <Button className="p-0 h-auto" variant="ghost">
                <Users className="size-5" />
                <span>Share</span>
              </Button>
              <Button variant="ghost" className="p-0">
                <Settings className="size-5" />
              </Button>
            </aside>
          </div>
        </header>

        <div className="border-y-2 border-white/5 py-3 mt-2 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="p-0 h-auto">
              <Plus className="size-4" />
              <span>Code</span>
            </Button>
            <Button variant="ghost" className="p-0 h-auto">
              <Plus className="size-4" />
              <span>Text</span>
            </Button>
          </div>

          <aside className="flex items-stretch space-x-4">
            <Button variant="ghost" className="p-0 h-auto">
              <span>Code</span>
              <ChevronDown className="size-4" />
            </Button>

            <Separator orientation="vertical" className="h-auto" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto group">
                  <span>GPT4o</span>
                  <DropdownMenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={10}>
                <DropdownMenuItem>GPT4o</DropdownMenuItem>
                <DropdownMenuItem>Llama 3</DropdownMenuItem>
                <DropdownMenuItem>Clyde Opus 3</DropdownMenuItem>
                <DropdownMenuItem>Mistral</DropdownMenuItem>
                <DropdownMenuItem>Gemini 1.5 Pro</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Separator orientation="vertical" className="h-auto" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-0 h-auto group">
                  <DropdownMenuIcon />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="h-[50px] flex justify-between"
              >
                <DropdownMenuItem className="px-3">
                  <ArrowDown className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <ArrowUp className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <Link className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <MessageSquareMoreIcon className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <Settings className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <Files className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <Trash2 className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="px-3">
                  <EllipsisVertical className="size-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </aside>
        </div>

        <div className="p-6">
          <Card />
        </div>
      </main>
    </div>
  );
}

export default ThirdMlPage;
