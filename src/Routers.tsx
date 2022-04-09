import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteAdmin from './frontend/admin/WebsiteAdmin'
import WebsiteLayout from './frontend/Layout/WebsiteLayout'
import About from './frontend/Pages/About'
import Home from './frontend/Pages/Home'
import Productt from './frontend/admin/pages/Product'
import Category from './frontend/admin/pages/Category'
import Dashboard from './frontend/admin/pages/Dashboard'
import Product from './frontend/Pages/Product'
type Props = {}

const Routers = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Navigate to="index" />} />
          <Route path="index" element={<Home />} />
          <Route path="about">
            <Route index element={<About />} />
          </Route>
          <Route path="product">
            <Route index element={<Product />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="admin" element={<WebsiteAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
            <Route index element={<Productt />} />
          </Route>
          <Route path="category">
            <Route index element={<Category />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default Routers