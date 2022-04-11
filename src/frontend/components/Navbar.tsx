import React from 'react'
import { Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import "../App.css"
import Slide from "./Slide"
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div>
            <div className='nav'>
                
                <img className='img-logo' src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="" />
                <div className="hi">
                <NavLink to="signin" ><p className='b'>Đăng Nhập</p></NavLink>
                <h4 className='h4-navbar'>|</h4>
                <NavLink to="signup" ><p className='b'>Đăng Ký</p></NavLink>
                <img className='img-logo2' src="https://img.icons8.com/ios/2x/shopping-cart-loaded--v2.gif" alt="" />
                </div>
            </div>
            <div >
                <Nav className='navbar'>
                    <Nav.Item>
                        <NavLink to="/">Trang Chủ</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/product">Sản Phẩm</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/about">Giới Thiệu</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/contact">Liên Hệ</NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
        
    )
}

export default Navbar