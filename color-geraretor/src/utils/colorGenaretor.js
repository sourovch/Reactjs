export default function colorGenaretor() {
  const hexArr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    const rendIndex = Math.floor(Math.random() * hexArr.length);
    hexColor = `${hexColor}${hexArr[rendIndex]}`;
  }
  return hexColor;
}
