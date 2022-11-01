import React, { useState } from 'react';

function CatDog() {
  const url =
    'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg';
  const [pic, setPic] = useState(() => url);
  const [string, setString] = useState(() => 'dog');

  const handleClick = (e) => {
    const catPic = url;
    const dogPic =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';

    setPic((prevpic) => {
      if (prevpic === dogPic) {
        setString('Dog');
        return catPic;
      }
      setString('Cat');
      return dogPic;
    });
  };

  return (
    <div>
      <h3>UseState()</h3>
      <img src={pic} alt="animal" />
      <button onClick={handleClick}>{string}</button>
    </div>
  );
}

export { CatDog };
