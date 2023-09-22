export const getPagesArray = (total: number): number[] => {
  let result: number[] = [];
  for (let i = 0; i < total; i++) {
    result.push(i + 1);
  }
  return result;
};
