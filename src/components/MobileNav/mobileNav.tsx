import {Button} from "../shared/Button";
import type {MobileNavProps} from "./types";

export function MobileNav({
  toggleMobileMenu,
  toggleMobileTools,
  toggleMobileScoreboard,
}: MobileNavProps) {
  return (
    <div className="lg:hidden bg-black/20 p-4 inner-shadow-soft mb-4">
      <div className="flex items-center gap-2 justify-between">
        <Button
          buttonIcon="menu"
          buttonIconColour="primary"
          buttonStyle="tertiary"
          handleClick={toggleMobileMenu}
          iconOnly
        />
        <div className="flex items-center flex-row gap-2">
          <Button
            buttonIcon="leaderboard"
            buttonIconColour="primary"
            buttonStyle="tertiary"
            handleClick={toggleMobileScoreboard}
            iconOnly
          />
          <Button
            buttonIcon="construction"
            buttonIconColour="primary"
            buttonStyle="tertiary"
            handleClick={toggleMobileTools}
            iconOnly
          />
        </div>
      </div>
    </div>
  );
}
