import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
};

export function Button({ asChild, children }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component className="font-sans py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-500">
      {children}
    </Component>
  );
}
