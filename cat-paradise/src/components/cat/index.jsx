import React from 'react';
import style from './style.module.css';

function Cat({
  cat: {
    image,
    name,
    origin,
    temperament,
    life_span,
    weight,
    description,
  },
}) {
  return (
    <div className={style.card}>
      <div className={style.imgWrapper}>
        <img src={image.url} alt={name} style={{ width: '100%' }} />
      </div>
      <div className={style.infoWrapper}>
        <h1 className={style.catName}>{name}</h1>
        <h2 className={style.catOrigin}>{origin}</h2>
        <h2 className={style.catTemp}>Temperament: {temperament}</h2>
        <h2 className={style.catLifeSpan}>Life Span: {life_span}</h2>
        <h2 className={style.catWeight}>Weight: {weight.metric}</h2>
        <h2 className={style.descriptionTxt}>description</h2>
        <div className={style.descriptionWrapper}>
          <h2 className={style.catDescription}>{description}</h2>
        </div>
      </div>
    </div>
  );
}

export { Cat };
