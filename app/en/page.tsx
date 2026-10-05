import { sitePath } from "@/lib/constants";

export default function LegacyLocalePage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${sitePath("/")}`} />
      <p>This website is now in English. <a href={sitePath("/")}>Open NeoWriter.</a></p>
    </>
  );
}
