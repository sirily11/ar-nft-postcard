import Component2 from "@/components/chapter2/Component";
import Component from "../../components/chapter1/component";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Page() {
  const translation = await getDictionary("zh");

  return (
    <main className="flex min-h-[300vh] flex-col">
      <Component title={translation["welcome-title"]} />
      <Component2
        titleText={translation["tokyo-title"]}
        tokyoFireworksTitle={translation["tokyo-firework-title"]}
      />
    </main>
  );
}
