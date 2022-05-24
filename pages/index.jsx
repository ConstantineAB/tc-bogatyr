import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Futter from '../components/Futter';
import Header from '../components/Header';
import Home from '../components/Home';
import { fetchProducts } from '../store/actions/products';

const index = () => {
  return (
    <>
      <Header />
        <Home />
      <Futter />
    </>
  )
}

export default index


















/*import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index*/