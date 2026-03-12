import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
interface LanguageSwitcherProps {
  currentLang: "fr" | "en";
  currentPath: string;
  className?: string;
}

export default function LanguageSwitcher({
  currentLang,
  currentPath,
  className,
}: LanguageSwitcherProps) {
  const handleLanguageChange = (value: string) => {
    if (!value || value === currentLang) return;

    // Convert current path to the new language
    let newPath = currentPath;

    if (value === "en") {
      // Switching to English
      if (currentPath === "/") {
        newPath = "/en";
      } else if (!currentPath.startsWith("/en")) {
        newPath = `/en${currentPath}`;
      }
    } else {
      // Switching to French (default)
      if (currentPath.startsWith("/en/")) {
        newPath = currentPath.replace("/en", "");
      } else if (currentPath === "/en") {
        newPath = "/";
      }
    }

    // Save current scroll position before redirecting
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());

    // Navigate to new language page
    window.location.href = newPath;
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Globe Icon */}
      <svg
        className="w-5 h-5 text-white"
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

      {/* Toggle Group */}
      <ToggleGroup
        type="single"
        value={currentLang}
        onValueChange={handleLanguageChange}
        variant="outline"
        size="sm"
        spacing={0}
      >
        <ToggleGroupItem
          value="fr"
          aria-label="Français"
          className="text-white! border-white hover:bg-white/10 hover:text-white! data-[state=on]:bg-white data-[state=on]:text-[#083D45]! font-semibold text-sm uppercase min-w-10 max-h-6"
        >
          fr
        </ToggleGroupItem>
        <ToggleGroupItem
          value="en"
          aria-label="English"
          className="text-white! border-white hover:bg-white/10 hover:text-white! data-[state=on]:bg-white data-[state=on]:text-[#083D45]! font-semibold text-sm uppercase min-w-10 max-h-6"
        >
          en
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
