import {useEffect, useState} from "react";

type MobilePanel = "menu" | "tools" | "scoreboard" | null;
export function useMobileNav() {
  const [activePanel, setActivePanel] = useState<MobilePanel>(null);
  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePanel]);

  const openMobileMenu = () => setActivePanel("menu");
  const openMobileTools = () => setActivePanel("tools");
  const openMobileScoreboard = () => setActivePanel("scoreboard");
  const closeMobilePanels = () => setActivePanel(null);

  // const mobileMenuOpen = activePanel === "menu";
  // const mobileToolsOpen = activePanel === "tools";
  // const mobileScoreboardOpen = activePanel === "scoreboard";

  const toggleMobileMenu = () =>
    setActivePanel((prev) => (prev === "menu" ? null : "menu"));
  const toggleMobileTools = () =>
    setActivePanel((prev) => (prev === "tools" ? null : "tools"));
  const toggleMobileScoreboard = () =>
    setActivePanel((prev) => (prev === "scoreboard" ? null : "scoreboard"));

  return {
    activePanel,
    mobileMenuOpen: activePanel === "menu",
    mobileToolsOpen: activePanel === "tools",
    mobileScoreboardOpen: activePanel === "scoreboard",
    openMobileMenu,
    openMobileTools,
    openMobileScoreboard,
    closeMobilePanels,
    toggleMobileMenu,
    toggleMobileTools,
    toggleMobileScoreboard,
  };
}
