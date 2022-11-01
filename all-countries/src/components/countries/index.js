import React from 'react';
import style from './style.module.css';

function Countries({ data, filter }) {
  return (
    <>
      {data.map((i) => {
        if (filter) {
          return i.name
            .toLowerCase()
            .includes(filter.toLowerCase()) ||
            (i.capital &&
              i.capital
                .toLowerCase()
                .includes(filter.toLowerCase())) ||
            i.languages
              .map((i) => i.name.toLowerCase())
              .join(' ')
              .includes(filter.toLowerCase()) ? (
            <Country key={i.name} country={i} />
          ) : (
            ''
          );
        }
        return <Country key={i.name} country={i} />;
      })}
    </>
  );
}

function Country({
  country: { name, capital, languages, population, flag, currencies },
}) {
  const frmLanguage =
    languages && languages.length > 1 ? 'languages' : 'Lanuage';
  const frmCurrencie =
    currencies && currencies.length > 1 ? 'Currencies' : 'Currencie';

  return (
    <div className={style.card}>
      <div className={style.cardName}>
        <img src={flag} alt={name} className={style.flag} />
        <h3>{name}</h3>
      </div>
      <h3>
        Capital:{' '}
        <span className={style.gray}>{capital && capital}</span>
      </h3>
      <h3>
        {frmLanguage}:{' '}
        <span className={style.gray}>
          {languages && languages.map((i) => i.name).join(', ')}
        </span>
      </h3>
      <h3>
        Population:{' '}
        <span className={style.gray}>
          {population.toLocaleString('en-US')}
        </span>
      </h3>
      <h3>
        {frmCurrencie}:{' '}
        <span className={style.gray}>
          {currencies && currencies.map((i) => i.name).join(', ')}
        </span>
      </h3>
    </div>
  );
}

export { Countries };
