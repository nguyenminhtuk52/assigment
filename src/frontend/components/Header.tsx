import React from 'react';
import {Nav} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Slide from './Slide';
type Props = {}
const Header = (props: Props) => {
  return (
    <div>
       <Navbar></Navbar>
    </div>
  )
}

export default Header