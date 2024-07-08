import Component2 from "@/components/chapter2/Component";
import Component from "../../components/chapter1/component";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Component3 } from "@/components/chapter3/Component";
import { Component4 } from "@/components/chapter4/Component";
import { Component5 } from "@/components/chapter5/Component5";
import { Component6 } from "@/components/chapter6/Component6";
import { Component7 } from "@/components/chapter7/Component7";

export default async function Page() {
  const translation = await getDictionary("zh");

  return (
    <main className="flex flex-col">
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
      <Component6
        title={translation["chapter-6-title"]}
        title2={translation["chapter-6-title2"]}
      />
      <Component7
        title={translation["chapter-7-title"]}
        claimButton={translation["claim-button"]}
      />
    </main>
  );
}
