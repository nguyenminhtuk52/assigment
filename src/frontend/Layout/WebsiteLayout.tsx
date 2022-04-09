import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default WebsiteLayout