import type {MobilePanelShellProps} from "./types";

export function MobilePanelShell({
  isOpen,
  onClose,
  children,
}: MobilePanelShellProps) {
  return (
    <>
      <div
        className={`fixed inset-x-0 top-18 bottom-0 z-50 transition-all duration-200 lg:hidden ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-300 hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto w-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
