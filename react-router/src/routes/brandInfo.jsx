import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function BrandInfo(props) {
  const [params] = useSearchParams();
  const data = params.get('brand');
  return data ? <h1>this is {data} </h1> : <h1>no quarrys</h1>;
}
