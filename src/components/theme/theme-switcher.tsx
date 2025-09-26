"use client";

import { useTheme } from "next-themes";
import React from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";
import { Button } from "../ui/button";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LuSunMedium className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />

      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
