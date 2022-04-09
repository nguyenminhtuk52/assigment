import React from 'react'
import {  } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Headerr from './component/Headerr'
import Product from './pages/Product'

type Props = {}

const WebsiteAdmin = (props: Props) => {
  return (
    <div>
      <Headerr></Headerr>
      <Outlet></Outlet>
    </div>
  )
}

export default WebsiteAdmin