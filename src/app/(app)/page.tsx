import Component2 from "@/components/chapter2/Component";
import Component from "../../components/chapter1/component";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Component3 } from "@/components/chapter3/Component";
import { Component4 } from "@/components/chapter4/Component";
import { Component5 } from "@/components/chapter5/Component5";
import { Component6 } from "@/components/chapter6/Component6";
import { Component7 } from "@/components/chapter7/Component7";
import { get } from "@vercel/edge-config";

export default async function Page({ params }: any) {
  const translation = await getDictionary("zh");
  const arlink = await get<string>("arlink");

  return (
    <main className="flex">
      <div className={"mx-auto max-w-md w-full max-h-[1000px] my-auto"}>
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
          dialog={{
            title: translation["dialog-title"],
            description: translation["dialog-content"],
            confirm: translation["dialog-button"],
            cancel: translation["dialog-button2"],
            description2: translation["dialog-content2"],
            description3: translation["dialog-content3"],
            description4: translation["dialog-content4"],
            previous: translation["dialog-button3"],
            done: translation["done-button"],
            success: translation["success-title"],
          }}
          checkWallet={translation["check-wallet-button"]}
          checkInAr={translation["check-in-ar"]}
          arlink={arlink!}
        />
      </div>
    </main>
  );
}
