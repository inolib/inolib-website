import type { HTMLAttributes } from "react";

export type BoxCardIconProps = HTMLAttributes<HTMLDivElement>;

export const BoxCardIcon = ({ ...passthru }: BoxCardIconProps) => {
  return <div {...passthru} />;
};
