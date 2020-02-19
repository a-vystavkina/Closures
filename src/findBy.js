export default function findBy(key, value) {
  return (item) => ((key && item[key] === value) ? item : false);
}
