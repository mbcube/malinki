/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Cal({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "studio" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#083D45" },
          dark: { "cal-brand": "#E6F5F7" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className={className}
      data-cal-namespace="studio"
      data-cal-link="malinki/studio"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </button>
  );
}
