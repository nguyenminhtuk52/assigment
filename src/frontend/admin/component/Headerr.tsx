import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../main.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='layout'>
            <div className="navbarr">
                <div className='img-logo11'>
                    <img className='img-logo' src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="" />
                </div>
                <Nav className='navbara'>
                    <Nav.Item>
                        <NavLink style={{padding:"1rem"}} to="dashboard" >Dashbroad</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink style={{padding:"1rem"}} to="product" >Sản Phẩm</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink style={{padding:"1rem"}} to="category">Danh Mục</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink style={{padding:"1rem"}} to="">Tài Khoản</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink style={{padding:"1rem"}} to="">Thống Kê</NavLink>
                    </Nav.Item>
                </Nav>
                <div className='img-logo22'>
                    <Dropdown >
                        <Dropdown.Toggle variant="none" className='img-22'>
                            <img style={{width:"3rem"}} src="https://img.icons8.com/ios/2x/guest-male.png" alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Đăng Xuất</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Đổi Mật Khẩu</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header