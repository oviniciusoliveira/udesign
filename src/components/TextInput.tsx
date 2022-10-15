import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes, ReactNode } from "react";

export type TextInputRootProps = {
  children: ReactNode;
};

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 px-4 py-3 rounded bg-gray-800 w-full focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-cyan-300 focus-within:ring-gray-800">
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export type TextInputIconProps = {
  children: ReactNode;
};

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export type TextInputInputProps = {} & InputHTMLAttributes<HTMLInputElement>;

function TextInputInput({ ...props }: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 focus:outline-none"
      {...props}
    />
  );
}
TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
