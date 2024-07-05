import "server-only";
import translation from "../../dictionaries/zh.json";

const dictionaries = {
  zh: () =>
    import("../../dictionaries/zh.json").then((module) => module.default),
} as {
  [locale: string]: () => Promise<typeof translation>;
};

export const getDictionary = async (locale: string | number) =>
  dictionaries[locale]();
