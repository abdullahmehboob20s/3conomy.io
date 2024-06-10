import { cn } from "@/lib/utils";

interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

function Heading({ className, ...props }: HeadingProps) {
  return <h2 className={cn("text-2xl 2xl:text-3xl", className)} {...props} />;
}

export default Heading;
