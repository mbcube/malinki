import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherDropdownProps {
  currentLang: "fr" | "en";
  currentPath: string;
  className?: string;
}

export default function LanguageSwitcherDropdown({
  currentLang,
  currentPath,
  className,
}: LanguageSwitcherDropdownProps) {
  const getPathForLang = (lang: "fr" | "en") => {
    let newPath = currentPath;

    if (lang === "en") {
      if (currentPath === "/") {
        newPath = "/en";
      } else if (!currentPath.startsWith("/en")) {
        newPath = `/en${currentPath}`;
      }
    } else {
      if (currentPath.startsWith("/en/")) {
        newPath = currentPath.replace("/en", "");
      } else if (currentPath === "/en") {
        newPath = "/";
      }
    }

    return newPath;
  };

  const handleSelect = (lang: "fr" | "en") => {
    if (lang === currentLang) return;
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    window.location.href = getPathForLang(lang);
  };

  return (
    <div className={className}>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 text-white hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="Select language"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold text-sm uppercase">{currentLang}</span>
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[6rem] bg-white border-[#083D45]/20 shadow-lg p-1 z-[200]"
      >
        {(["fr", "en"] as const).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onSelect={() => handleSelect(lang)}
            className={`flex items-center gap-2 px-3 py-2 mb-[0.2rem] cursor-pointer rounded-sm data-[highlighted]:bg-[#083D45]/8 ${currentLang === lang ? "bg-[#083D45]! data-[highlighted]:bg-[#083D45]!" : ""}`}
          >
            <span className={`font-semibold text-sm uppercase ${currentLang === lang ? "text-white" : "text-[#083D45]"}`}>
              {lang}
            </span>
            {currentLang === lang && (
              <svg
                className="w-3 h-3 ml-auto text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth={2.5}
                />
              </svg>
            )}
          </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
