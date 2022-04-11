import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import WebsiteAdmin from './frontend/admin/WebsiteAdmin'
import WebsiteLayout from './frontend/Layout/WebsiteLayout'
import About from './frontend/Pages/About'
import Home from './frontend/Pages/Home'
import Productt from './frontend/admin/pages/Product/ProductManage'
import Category from './frontend/admin/pages/Category/CategoryManage'
import Dashboard from './frontend/admin/pages/Dashboard'
import Product from './frontend/Pages/Product'
import CreateProduct from './frontend/admin/pages/Product/CreateProduct'
import UpdateProduct from './frontend/admin/pages/Product/UpdateProduct'
import { ProductType } from './frontend/types/Product'
import { add, list, remove, update } from './frontend/api/products'
import { addd, listt, removee, updatee } from './frontend/api/category'
import product from './frontend/admin/pages/Product/ProductManage'
import Signup from './frontend/Pages/Signup'
import Singin from './frontend/Pages/Singin'
import UpdateCategory from './frontend/admin/pages/Category/UpdateCategory'
import CreateCategory from './frontend/admin/pages/Category/CreateCategory'
import { CategoryType } from './frontend/types/category'
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
    setProducts(products.filter(item => item._id !== _id));
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }
  //cate
  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listt();
      setCategorys(data);
    };
    getCategory();
  }, [])
  const onHandleRemovee = (_id: number) => {
    removee(_id);
    setCategorys(categorys.filter(item => item._id !== _id));
  }
  const onHandleAddd = async (category: CategoryType) => {
    const { data } = await addd(category);
    setCategorys([...categorys, data])
  }
  const onHandleUpdatee = async (category: CategoryType) => {
    const { data } = await updatee(category);
    setCategorys(categorys.map(item => item._id == data._id ? data : item));
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
          <Route path="signup">
            <Route index element={<Signup />} />
          </Route>
          <Route path="signin">
            <Route index element={<Singin />} />
          </Route>
          <Route path="product">
            <Route index element={<Product products={products} />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="admin" element={<WebsiteAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
            <Route index element={<Productt products={products} onRemove={onHandleRemove} categorys={categorys} />} />
            <Route path="create" element={<CreateProduct onAdd={onHandleAdd} categorys={categorys}/>} />
            <Route path=":_id/update" element={<UpdateProduct onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path="category">
            <Route index element={<Category categorys={categorys} onRemovee={onHandleRemovee} />} />
            <Route path="create" element={<CreateCategory onAddd={onHandleAddd} />} />
            <Route path=":_id/update" element={<UpdateCategory onUpdatee={onHandleUpdatee} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default Routers