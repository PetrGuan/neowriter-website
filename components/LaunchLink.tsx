import { ArrowUpRight } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

export default function LaunchLink({
  className = "button button-primary",
}: {
  className?: string;
}) {
  return (
    <a
      className={className}
      href={APP_STORE_URL ?? "/#availability"}
      {...(APP_STORE_URL
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {APP_STORE_URL ? "Get NeoWriter" : "Coming soon"}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
