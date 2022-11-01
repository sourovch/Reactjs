import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandLink from './brand';

export default function Brands(props) {
  return (
    <>
      <BrandLink brand="nike" />
      {'  '} <BrandLink brand="addidus" />
      {'  '} <BrandLink brand="bata" />
      {'  '} <BrandLink brand="lotto" />
      <div>
        <Outlet />
      </div>
    </>
  );
}
