import { Link as BaseLink, type LinkProps as BaseLinkProps } from "~/components/link";
import { cn } from "~/helpers";

type LinkProps = Omit<BaseLinkProps, "_border" | "_color" | "_shape">;

export const Link = ({ className, ...passthru }: LinkProps) => {
  return (
    <BaseLink
      _color="transparent"
      _shape="link"
      className={cn("inline-flex underline focus-visible:outline-black", className)}
      {...passthru}
    />
  );
};
