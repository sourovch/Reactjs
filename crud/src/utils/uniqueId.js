export default function uniqueId(arr = [], degit = 6) {
  const genarate = () => {
    let id = '';
    for (let i = 0; i < degit; i++) {
      id = `${id}${Math.floor(Math.random() * 9)}`;
    }
    return id;
  };

  let id = '';
  do {
    id = genarate();
  } while (arr.includes(id));
  return id;
}
