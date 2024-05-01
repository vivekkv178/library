export const replaceUrl = (
  url: string,
  valuesObject: Record<string, string>
): string => {
  let replacedUrl = url;
  Object.keys(valuesObject).forEach((key) => {
    replacedUrl = replacedUrl.replace(
      new RegExp(`{${key}}`, "g"),
      valuesObject[key]
    );
  });
  return replacedUrl;
};
