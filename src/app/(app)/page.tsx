import Component2 from "@/components/chapter2/Component";
import Component from "../../components/chapter1/component";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Component3 } from "@/components/chapter3/Component";
import { Component4 } from "@/components/chapter4/Component";
import { Component5 } from "@/components/chapter5/Component5";

export default async function Page() {
  const translation = await getDictionary("zh");

  return (
    <main className="flex min-h-[300vh] flex-col">
      <Component title={translation["welcome-title"]} />
      <Component2
        titleText={translation["tokyo-title"]}
        tokyoFireworksTitle={translation["tokyo-firework-title"]}
      />
      <Component3 title={translation["kyoto-title"]} />
      <Component4 title={translation["japan-city-title"]} />
      <Component5
        title={translation["chapter-5-title"]}
        title2={translation["chapter-5-title2"]}
        title3={translation["chapter-5-title3"]}
      />
    </main>
  );
}
