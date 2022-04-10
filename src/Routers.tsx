import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteAdmin from './frontend/admin/WebsiteAdmin'
import WebsiteLayout from './frontend/Layout/WebsiteLayout'
import About from './frontend/Pages/About'
import Home from './frontend/Pages/Home'
import Productt from './frontend/admin/pages/Product/ProductManage'
import Category from './frontend/admin/pages/Category/Category'
import Dashboard from './frontend/admin/pages/Dashboard'
import Product from './frontend/Pages/Product'
import CreateProduct from './frontend/admin/pages/Product/CreateProduct'
import UpdateProduct from './frontend/admin/pages/Product/UpdateProduct'
import { ProductType } from './frontend/types/Product'
import { add, list, remove } from './frontend/api/products'
type Props = {}

const Routers = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProduct()
  }, [])
  const onHandleRemove = (_id: number) => {
    remove(_id);
    // reRender
    setProducts(products.filter(item => item._id !== _id));
    // setProduct()
  }
  const onHandleAdd = async (product: ProductType) => {
    const {data}=await add(product);
    setProducts([...products,data])
  }
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
            <Route index element={<Productt products={products} onRemove={onHandleRemove} />} />
            <Route path="create" element={<CreateProduct onAdd={onHandleAdd} />} />
            <Route path="update" element={<UpdateProduct />} />
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