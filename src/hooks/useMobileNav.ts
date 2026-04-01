import {useEffect, useState} from "react";
export function useMobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileScoreboardOpen, setMobileScoreboardOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || mobileToolsOpen || mobileScoreboardOpen ? "hidden" : "";

    console.log(mobileToolsOpen);

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, mobileToolsOpen, mobileScoreboardOpen]);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const openMobileTools = () => setMobileToolsOpen(true);
  const closeMobileTools = () => setMobileToolsOpen(false);
  const toggleMobileTools = () => setMobileToolsOpen((prev) => !prev);

  const openMobileScoreboard = () => setMobileScoreboardOpen(true);
  const closeMobileScoreboard = () => setMobileScoreboardOpen(false);
  const toggleMobileScoreboard = () => setMobileScoreboardOpen((prev) => !prev);

  return {
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    mobileMenuOpen,
    openMobileTools,
    closeMobileTools,
    mobileToolsOpen,
    toggleMobileTools,
    openMobileScoreboard,
    closeMobileScoreboard,
    toggleMobileScoreboard,
    mobileScoreboardOpen,
  };
}
