import React, { useEffect, useState } from 'react';
import { read } from '../api/products';
import { useParams } from 'react-router-dom';
import { ProductType } from '../types/Product';
import { Button } from 'react-bootstrap';

type Props = {}

const Deltail = (props: Props) => {
    const { _id } = useParams()
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        const getPro = async () => {
            const { data } = await read(_id);
            setProduct(data);
            console.log(data);
        }
        getPro();
    }, [_id])
    return (
        <div>
            <div className="detaill">
                <div className="detaill_img">
                    <img src={product?.image} alt="" />
                    <div>
                        <Button style={{ marginTop: '17px', marginLeft: '70px' }} variant="outline-primary">Đặt Hàng</Button>
                    </div>
                </div>
                <div className="detail_1">
                    <h3>{product?.name} </h3> <br />
                    <h6>Giá : {product?.price}</h6> <br />
                    <h6>Size : <h4>S/M/L/XL</h4> </h6> <br />
                    <h6>Số lượng :</h6><input type="number" name="" id="" /> <br />
                    <h6>Mô tả sản phẩm : </h6> <br />
                    <span>{product?.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Deltail