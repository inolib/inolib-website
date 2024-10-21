import { forwardRef, useCallback, useId, useState, type ChangeEventHandler, type InputHTMLAttributes } from "react";

import { cn } from "~/helpers";

import CheckIcon from "#/images/icons/check.svg";

export type ToggleField = {
  _label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "id" | "type" | "value">;

export const ToggleField = forwardRef<HTMLInputElement, ToggleField>(
  ({ _label, className, onChange, ...passthru }, ref) => {
    const id = useId();

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (event) => {
        onChange?.(event);
        setIsChecked((isChecked) => !isChecked);
      },
      [onChange],
    );

    return (
      <div className="flex flex-col gap-2" data-field>
        <input
          checked={isChecked}
          className={cn("peer size-0 outline-none", className)}
          id={id}
          onChange={handleChange}
          ref={ref}
          type="checkbox"
          value={_label}
          {...passthru}
        />

        <label
          className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-blue-600 bg-blue-50 px-4 py-1 outline-none hover:bg-blue-100 peer-checked:bg-blue-900 peer-checked:text-white peer-focus-visible:outline-4 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-blue-600"
          htmlFor={id}
        >
          <CheckIcon className={cn("stroke-white", { hidden: !isChecked })} />
          <span>{_label}</span>
        </label>
      </div>
    );
  },
);

ToggleField.displayName = "ToggleField";
