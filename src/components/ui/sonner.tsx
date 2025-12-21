import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="top-center"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-emerald-600" />,
        info: <InfoIcon className="size-4 text-[#083D45]" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-600" />,
        error: <OctagonXIcon className="size-4 text-red-600" />,
        loading: <Loader2Icon className="size-4 animate-spin text-[#083D45]" />,
      }}
      toastOptions={{
        style: {
          background: "white",
          color: "#083D45",
          border: "2px solid #083D45",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
        },
        classNames: {
          success: "!border-emerald-600",
          error: "!border-red-600 !text-red-600",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
