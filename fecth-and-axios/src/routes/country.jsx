import React from 'react';

export default function Country({
  country: { name, flags, languages, capital },
}) {
  const formatedCapital = capital ? (
    <>
      <span>Capital: </span>
      {capital}
    </>
  ) : (
    ''
  );

  const fonmatedLanguage =
    languages.length > 1 ? 'Languages' : 'Language';

  return (
    <div
      style={{
        margin: '1em',
        padding: '.8em',
      }}
    >
      <img
        src={flags.png}
        alt={`${name}'s Flag`}
        style={{ border: '1px solid black', width: '30%' }}
      />
      <h3>{name}</h3>
      <h4>{formatedCapital}</h4>
      <h4>
        {fonmatedLanguage}:{' '}
        {languages.map((i) => `${i.name}`).join(',')}
      </h4>
    </div>
  );
}
