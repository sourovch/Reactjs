import React, { useState } from 'react';
import style from './style.module.css';

function Statistics({ data }) {
  const [isPop, setIsPop] = useState(true);

  const handleClick = (bool = true) => {
    return (e) => setIsPop(bool);
  };

  const dataCount = 10;

  //   calculating World Population
  const worldPop = data
    .map((i) => i.population)
    .reduce((prev, curr) => {
      return prev + curr;
    });

  const dataIns = [...data];

  //  finding most spoken languages
  const langCounts = () => {
    const obj = {};
    data.forEach((i) => {
      i.languages.forEach((j) => {
        if (!obj[j.name]) {
          obj[j.name] = 1;
        } else {
          obj[j.name]++;
        }
      });
    });
    return obj;
  };

  const langDataArr = Object.entries(langCounts())
    .sort((a, b) => b[1] - a[1])
    .splice(0, dataCount);

  const maxLangCount = langDataArr[0][1];

  return (
    <div id="statestics" className={style.stat}>
      <div className={style.btnWrapper}>
        <button onClick={handleClick(true)} className={style.btn}>
          Population
        </button>
        <button onClick={handleClick(false)} className={style.btn}>
          Language
        </button>
      </div>
      {isPop ? (
        <div className={style.statWrapper}>
          <h2>Top {dataCount} Countries With most Population</h2>
          <PopStat
            name="World"
            population={worldPop}
            maxPop={worldPop}
          />
          {dataIns
            .sort((a, b) => b.population - a.population)
            .map((i) => (
              <PopStat
                key={i.name}
                name={i.name}
                population={i.population}
                maxPop={worldPop}
              />
            ))
            .splice(0, dataCount)}
        </div>
      ) : (
        <div className={style.statWrapper}>
          <h2>Top {dataCount} Most Spoken Languages</h2>
          {langDataArr.map(([key, value]) => {
            return (
              <LangStat
                key={key}
                name={key}
                count={value}
                maxLang={maxLangCount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function PopStat({ name, population, maxPop }) {
  const barWidth = (population / maxPop) * 100;
  return (
    <div className={style.dataStat}>
      <p>{name}</p>
      <div className={style.barWrapper}>
        <div
          style={{ width: `${barWidth.toFixed(2)}%` }}
          className={style.bar}
        ></div>
      </div>
      <p>{population.toLocaleString('en-US')}</p>
    </div>
  );
}

function LangStat({ name, count, maxLang }) {
  const barWidth = (count / maxLang) * 100;
  return (
    <div className={style.dataStat}>
      <p>{name}</p>
      <div className={style.barWrapper}>
        <div
          style={{ width: `${barWidth.toFixed(2)}%` }}
          className={style.bar}
        ></div>
      </div>
      <p>{count.toLocaleString('en-US')}</p>
    </div>
  );
}

export { Statistics };
