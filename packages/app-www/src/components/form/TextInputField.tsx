import type { ReadonlySignal } from "@preact/signals-react";
import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type TextInputFieldProps = {
  _error: ReadonlySignal<string>;
  _label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "aria-describedby" | "aria-invalid" | "id">;

export const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
  ({ _error, _label, className, ...passthru }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col gap-2" data-field>
        <label className="cursor-pointer font-bold" htmlFor={id}>
          {_label}
        </label>

        <input
          aria-describedby={`${id}-error`}
          aria-invalid={_error.value !== ""}
          className={cn(
            "rounded-lg border border-blue-600 p-2 outline-none hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-600",
            {
              "border-red-600 focus-visible:outline-red-600": _error.value !== "",
            },
            className,
          )}
          id={id}
          ref={ref}
          {...passthru}
        />

        <p className="text-red-600" id={`${id}-error`}>
          {_error.value}
        </p>
      </div>
    );
  },
);

TextInputField.displayName = "TextInputField";
