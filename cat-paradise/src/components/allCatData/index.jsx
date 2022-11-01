import React from 'react';

import style from './style.module.css';

const AllCatData = ({ data }) => {
  // calculating avg life of all cat breeds
  const lifeSpanArr = data.map((i) => {
    const lifeSpanNum = i.life_span
      .split(' - ')
      .map((i) => Number(i));
    const lifeSpanSum = lifeSpanNum.reduce(
      (prev, curr) => prev + curr
    );
    const lifeSpanAvg = lifeSpanSum / lifeSpanNum.length;
    return lifeSpanAvg;
  });
  const lifeSpanTot = lifeSpanArr.reduce((prev, curr) => prev + curr);
  const allAvgLifeSpan = lifeSpanTot / lifeSpanArr.length;

  // calculating avg weight of all cat breeds
  const weightArr = data.map((i) => {
    const weightNum = i.weight.metric
      .split(' - ')
      .map((i) => Number(i));
    const weightSum = weightNum.reduce((prev, curr) => prev + curr);
    const weightAvg = weightSum / weightNum.length;
    return weightAvg;
  });
  const weightTot = weightArr.reduce((prev, curr) => prev + curr);
  const allWeigthAvg = weightTot / weightArr.length;
  return (
    <div className={style.allCatInfo}>
      <h2>There are {lifeSpanArr.length} cat breeds</h2>
      <div className={style.infoWrapper}>
        <h3>A Cat in avg weight</h3>{' '}
        <span className={style.roundTxt}>
          {allWeigthAvg.toFixed(2)}
        </span>
        <h3>kg's and lives</h3>{' '}
        <span className={style.roundTxt}>
          {allAvgLifeSpan.toFixed(2)}
        </span>{' '}
        <h3>years</h3>
      </div>
    </div>
  );
};

export { AllCatData };
