import type { ReadonlySignal } from "@preact/signals-react";
import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type CheckboxFieldProps = {
  _error: ReadonlySignal<string>;
  _label: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "aria-describedby" | "aria-invalid" | "id" | "type">;

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ _error, _label, className, ...passthru }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center gap-2">
          <input
            aria-describedby={`${id}-error`}
            aria-invalid={_error.value !== ""}
            className={cn(
              "peer size-6 cursor-pointer appearance-none rounded-md border border-blue-600 outline-none checked:bg-blue-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
              {
                "border-red-600 focus-visible:outline-red-600": _error.value !== "",
              },
              className,
            )}
            id={id}
            ref={ref}
            type="checkbox"
            {...passthru}
          />

          <label className="cursor-pointer" htmlFor={id}>
            {_label}
          </label>

          <div className="absolute hidden size-6 items-center justify-center peer-checked:flex">
            <CheckIcon className="stroke-white" />
          </div>
        </div>

        <p className="text-red-600" id={`${id}-error`}>
          {_error.value}
        </p>
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
