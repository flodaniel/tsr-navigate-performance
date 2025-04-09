export const generateRandomObject = (): { [key: string]: string } => {
  const result: { [key: string]: string } = {};

  for (let i = 0; i < 1000; i++) {
    result[`key_${i}`] = `value_${i}`;
  }

  return result;
};
