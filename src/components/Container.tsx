import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLDivElement {}

function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("p-6 lg:p-8 2xl:p-10", className)} {...props} />;
}

export default Container;
