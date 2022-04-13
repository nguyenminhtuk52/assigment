import React, { useState } from 'react'
import { Dropdown, Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import "../App.css"
import { isAuthenticate } from '../utils/Localstorge'
type Props = {}

const Navbar = (props: Props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const handerlRemove = async () => {
        const respon = await localStorage.removeItem('user');
        setUser(respon);
        navigate('/');
        alert("Đăng Xuất Thành Công");
    }
    return (
        <div>
            <div className='nav'>
                <div className='hiiii'>
                    <img className='img-logo' src="https://rubee.com.vn/admin/webroot/upload/image/images/nike-logo.jpg" alt="" />
                </div>
                <div className="hii" style={{marginBottom:'30px'}}>
                    <NavLink to="signin" ><p className='b'>Đăng Nhập</p></NavLink>
                    <h4 className='h4-navbar'>|</h4>
                    <NavLink to="signup" ><p className='b'>Đăng Ký</p></NavLink>
                    <Dropdown style={{ width: '10%' }} >
                        <Dropdown.Toggle variant="none" className='img-22'>
                            <img style={{ width: "3rem" }} src="https://img.icons8.com/ios/2x/guest-male.png" alt="" />
                        </Dropdown.Toggle>
                        {isAuthenticate() && (
                            <Dropdown.Menu>
                                <Dropdown.Item>{isAuthenticate().user?.email}</Dropdown.Item>
                                <Dropdown.Item onClick={() => handerlRemove()}>Đăng Xuất</Dropdown.Item>
                            </Dropdown.Menu>
                        )}
                    </Dropdown>
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