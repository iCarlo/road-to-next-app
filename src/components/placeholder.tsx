import React from "react";
import { LuMessageSquareWarning } from "react-icons/lu";

interface PlaceholderProps {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
}

export const Placeholder = ({
  label,
  icon = <LuMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
      {React.cloneElement(icon, {
        ...(icon.props || {}),
        className: "w-16 h-16",
      })}

      <h2 className="text-lg text-center">{label}</h2>
      {React.cloneElement(button, {
        ...(icon.props || {}),
        className: "h-10",
      })}
    </div>
  );
};
