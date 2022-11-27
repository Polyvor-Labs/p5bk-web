/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

// data page web
export const links = [
  {
    id: 1,
    text: 'beranda',
    url: '/',
  },
  {
    id: 2,
    text: 'produk',
    url: '/products',
  },
  {
    id: 3,
    text: 'tentang web',
    url: '/about',
  },
]

// API untuk mendapatkan data produk
export const products_url = 'https://p5bk-api.herokuapp.com/api/data/produk'

// API untuk mendapatkan produk secara detail
export const single_product_url = `https://p5bk-api.herokuapp.com/api/cari/produk?kode=`
