import React from 'react'
import { BiCart} from 'react-icons/bi'
import {IoPersonOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
  return (
    <>
      <IoPersonOutline className='icon'/>
      <Link to='/Cart'>
        <BiCart  className='icon'/>
      </Link>
    </>
  )
}
