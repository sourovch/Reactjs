import React from 'react';
import style from '../style.module.css';

function About() {
  return (
    <div className={style.contentWrapper}>
      <h1 className={style.title}>All Cat Breeds</h1>
      <p className={style.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
        facilis omnis culpa assumenda velit nesciunt exercitationem
        ratione iusto, adipisci ex temporibus quia quasi. Excepturi,
        ducimus! Asperiores nostrum autem officia qui. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Deleniti
        blanditiis explicabo maxime quis cupiditate aliquam quaerat
        veritatis eligendi reiciendis id libero dolores, ipsum, dolore
        animi! Quidem aliquid in culpa molestiae. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Quod inventore,
        laboriosam eum animi, magni est nisi accusamus consequuntur
        enim quasi libero? Officia assumenda fugiat incidunt nam
        magnam similique obcaecati culpa.
      </p>
      <div className={style.contactInfoWrapper}>
        <h2 className={style.title2}>Contact us</h2>
        <address>
          <div className={style.phone}>
            <a href="mailto:sourovch@gmail.com">
              Mail: sourovch@gmail.com
            </a>
            <a href="tel:+8801919171958">Phone: 01919171958</a>
          </div>
          <p>Address: Netrakona Sadar, Netrakona, Bangladesh</p>
        </address>
      </div>
    </div>
  );
}

export { About };
