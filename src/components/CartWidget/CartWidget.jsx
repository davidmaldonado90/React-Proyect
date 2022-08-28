import React from 'react'
import { BiCart} from 'react-icons/bi'
import {IoPersonOutline} from 'react-icons/io5'

export const CartWidget = () => {
  return (
    <>
      <IoPersonOutline className='icon'/>
      <BiCart  className='icon'/>
    </>
  )
}
