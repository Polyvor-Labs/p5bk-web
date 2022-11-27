/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import { FaSearch } from 'react-icons/fa'
import featureImg from '../assets/es_dingdot.jpg'
import featureImg_2 from '../assets/es_manohara.jpg'
import featureImg_3 from '../assets/ricebox.jpg'
import { formatPrice } from '../utils/helpers'
import ProductTemplate from './ProductTemplate'

const FeaturedProducts = () => {
  const {productsLoading, productsError, featured} = useProductsContext();
  if(productsLoading)
  {
    return <Loading/>
  }

  else if(productsError)
  {
    return <Error/>
  }

  else
  {
  return <Wrapper className='section'>
    <div className='title'>
      <h2>
        Produk Unggulan
      </h2>
      <div className='underline'/>
    </div>
    <article className='section-center'>
    <div className='section-center featured'>
    <ProductTemplate key="1" name="Es DingDot" image={featureImg} id="1" price="6000"></ProductTemplate>
    </div>
    <div className='section-center featured'>
    <ProductTemplate key="2" name="Es Manohara" image={featureImg_2} id="2" price="5000"></ProductTemplate>
    </div>
    <div className='section-center featured'>
    <ProductTemplate key="3" name="Rice Box" image={featureImg_3} id="3" price="15000"></ProductTemplate>
    </div>
    </article>
  </Wrapper>
  }
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 500px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
