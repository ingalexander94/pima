export const getTypedCharacter = (
  currentText: string,
  newText: string
): string => {
  const lastCharacter = newText.at(-1) ?? "";
  if (currentText.length === 0) return lastCharacter;
  return newText.length > 1 && currentText === lastCharacter
    ? newText[0]
    : lastCharacter;
};
