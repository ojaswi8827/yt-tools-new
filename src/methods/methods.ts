export const addHashtags = (text: string) =>
  "#" + text.replaceAll(" ", "").replaceAll("\n", " #").trim();

export const addCommas = (text: string) => text.replaceAll("\n", ", ");
