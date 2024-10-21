import { clsx, type ClassValue } from "clsx";

import { twMerge } from "./twMerge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
