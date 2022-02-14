export const dedupe = (key, arr) => {
  const unique = [];
  arr.forEach(el => {
    if(!unique.includes(el[key])) {
      unique.push(el[key]);
    }
  });
  return unique;
};