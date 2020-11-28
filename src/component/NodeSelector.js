import React from 'react';
import { Handle } from 'react-flow-renderer';
import svg from '../assests/logo.svg'

export const AccountSelector =()=>(
      <>
        <Handle type="target" position="left"/>
        <Handle type="source" position="left"/>
        <Handle type="source" position="right" id="a"/>
        <img src={svg}></img>
        <p>Account Service</p>
      </>
  )

export const ShippingSelector = () => (
  <>
  <Handle type='target' position='right' />
  <Handle type='source' position='right' />
  <Handle type='target' position='left'  />
  <img src={svg}></img>
  <p>Shipping Service</p>

  </>
)

export const BillingSelector = () => (
  <>
  <Handle type='target' position='right' />
  <Handle type='source' position='right' />
  <Handle type='target' position='left'  />
  <img src={svg}></img>
  <p>Billing Service</p>

  </>
)

export const ProductSelector = () => (
  <>
  <Handle type='target' position='left' />
  <Handle type='source' position='left' />
  <Handle type='target' position='right'  />
  <img src={svg}></img>
  <p>Product Catalogue</p>

  </>
)




