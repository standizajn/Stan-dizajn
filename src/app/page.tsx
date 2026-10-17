import { LanguageProvider } from "@/lib/LanguageProvider";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <LanguageProvider initialLocale="sr">
      <HomeSections />
    </LanguageProvider>
  );
}
