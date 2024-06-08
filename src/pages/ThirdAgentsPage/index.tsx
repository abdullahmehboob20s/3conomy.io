import Icons from "@/components/Icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Ellipsis, Laugh, Mic, Paperclip, Plus, Search } from "lucide-react";
import { ReactNode } from "react";

const AgentAvatar = ({
  isActive,
  isOnline,
  Icon,
}: {
  isActive: boolean;
  isOnline: boolean;
  Icon?: any;
}) => {
  return (
    <div className="px-4 relative cursor-pointer">
      <div
        className={cn(
          "w-[5px] h-3 bg-white/20 rounded-r-md absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-200 opacity-0",
          isActive ? "h-10 bg-white opacity-100" : null
        )}
      ></div>

      <div className="relative">
        <div className="size-16 rounded-2xl overflow-hidden flex items-center justify-center bg-neutral-900">
          {Icon ? (
            <Icon className="opacity-80" />
          ) : (
            <img src="/images/agent-1.png" className="w-full h-full" alt="" />
          )}
        </div>
        {isOnline ? (
          <div className="size-4 rounded-full bg-green-400 border-4 border-background absolute -bottom-1 right-0"></div>
        ) : null}
      </div>
    </div>
  );
};

const MsgWrapper = ({
  position,
  children,
}: {
  position: "left" | "right";
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-[50%] w-full",
        position === "left" ? "" : "ml-auto flex justify-end"
      )}
    >
      {children}
    </div>
  );
};

const MsgView = ({
  isAdmin = true,
  children,
}: {
  isAdmin: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-900 w-fit rounded-lg py-4 px-6",
        isAdmin ? "bg-neutral-800" : null
      )}
    >
      {children}

      <div className="mt-2 flex items-center space-x-1.5">
        <Icons.doubleTick className="size-4" />
        <p className="text-xs opacity-60 font-thin">11:46pm</p>
      </div>
    </div>
  );
};

function ThirdAgentsPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] grid grid-cols-[100px_1fr]">
      <aside className="space-y-3 py-4 border-r border-white/10">
        <AgentAvatar isActive={false} isOnline={false} />
        <AgentAvatar isActive={true} isOnline={true} />
        <AgentAvatar isActive={false} isOnline={false} />
        <AgentAvatar isActive={false} isOnline={false} />
        <AgentAvatar isActive={false} isOnline={false} />
        <AgentAvatar isActive={false} isOnline={false} Icon={Icons.agent} />
        <AgentAvatar isActive={false} isOnline={true} Icon={Icons.agent} />
        <AgentAvatar isActive={false} isOnline={false} Icon={Icons.agent} />
        <AgentAvatar isActive={false} isOnline={false} Icon={Plus} />
      </aside>
      <main className="grid grid-rows-[86px_1fr_80px] [&>*]:px-8">
        <header className="border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="text-2xl">Agent 2</p>
            <p className="text-green-500">Online</p>
          </div>
          <aside className="flex items-center space-x-7">
            <Button variant="ghost" className="p-0 h-auto">
              <Search />
            </Button>
            <Button variant="ghost" className="p-0 h-auto">
              <Ellipsis />
            </Button>
          </aside>
        </header>

        <main className="space-y-4 py-6">
          <div className="py-4">
            <Badge className="mx-auto block w-fit">Today</Badge>
          </div>

          <MsgWrapper position="left">
            <MsgView isAdmin={false}>
              <img
                src="/images/salary-slip.png"
                className="mb-5 w-full"
                alt=""
              />
              Greetings! <br />
              This month's salary, thank you.
            </MsgView>
          </MsgWrapper>

          <MsgWrapper position="right">
            <MsgView isAdmin={true}>Hello, I appreciate it</MsgView>
          </MsgWrapper>
          <MsgWrapper position="right">
            <MsgView isAdmin={true}>
              @aiagent1 help @agent2 set up direct deposit for this first
              paycheck
            </MsgView>
          </MsgWrapper>
        </main>

        <footer className="border-t border-white/10 relative">
          <button className="absolute top-1/2 left-9 -translate-y-1/2 flex z-10 opacity-60 hover:opacity-100">
            <Paperclip className="size-5" />
          </button>

          <div className="absolute top-1/2 -translate-y-1/2 right-10 flex items-center space-x-6 z-20">
            <button className="flex opacity-60 hover:opacity-100">
              <Laugh className="size-5" />
            </button>
            <button className="flex opacity-60 hover:opacity-100">
              <Mic className="size-5" />
            </button>
          </div>

          <Input
            className="absolute top-0 left-0 w-full h-full bg-transparent rounded-none outline-none border-none ring-0 focus-visible:ring-inset focus-visible:ring-0 pl-20"
            placeholder="Write a message..."
          />
        </footer>
      </main>
    </div>
  );
}

export default ThirdAgentsPage;
