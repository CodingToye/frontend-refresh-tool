import {Button} from "../shared/Button";
import type {MobileNavProps} from "./types";

export function MobileNav({
  toggleMobileMenu,
  toggleMobileTools,
  toggleMobileScoreboard,
  mobileScoreboardOpen,
  mobileToolsOpen,
  mobileMenuOpen,
}: MobileNavProps) {
  return (
    <div className="lg:hidden bg-black/20 p-4 inner-shadow-soft h-18 lg:mb-4">
      <div className="flex items-center gap-2 justify-between">
        <Button
          buttonIcon="menu"
          buttonIconStyle={`${mobileMenuOpen ? "secondary" : "white"}`}
          buttonStyle="tertiary"
          handleClick={toggleMobileMenu}
          iconOnly
        />
        <div className="flex items-center flex-row gap-2">
          <Button
            buttonIcon="leaderboard"
            buttonIconStyle={`${mobileScoreboardOpen ? "secondary" : "white"}`}
            buttonStyle="tertiary"
            handleClick={toggleMobileScoreboard}
            iconOnly
          />
          <Button
            buttonIcon="construction"
            buttonIconStyle={`${mobileToolsOpen ? "secondary" : "white"}`}
            buttonStyle="tertiary"
            handleClick={toggleMobileTools}
            iconOnly
          />
        </div>
      </div>
    </div>
  );
}
