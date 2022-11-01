import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function BrandLink({ brand, ...props }) {
  let [searchParams] = useSearchParams();
  const isActive = searchParams.getAll('brand').includes(brand);
  return (
    <Link
      style={{ color: isActive ? 'red' : '' }}
      to={isActive ? '' : `?brand=${brand}`}
    >
      {brand}
    </Link>
  );
}
