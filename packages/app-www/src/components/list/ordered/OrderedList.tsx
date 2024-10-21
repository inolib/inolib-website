import type { HTMLAttributes } from "react";

export type OrderedListProps = HTMLAttributes<HTMLUListElement>;

export const OrderedList = ({ ...passthru }: OrderedListProps) => {
  return <ul {...passthru} />;
};
