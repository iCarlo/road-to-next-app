import { LucideLoaderCircle } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center">
      <LucideLoaderCircle className="size-16 animate-spin" />
    </div>
  );
};

export default Spinner;
