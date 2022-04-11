import axios from 'axios'
import { Button, Table } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { CategoryType } from '../../../types/category'
type CategoryManage = {
  categorys: CategoryType,
  onRemovee: (category: CategoryType) => void
}
const category = (props: CategoryManage) => {
  return (
    <div>
      <NavLink to='create'><Button style={{ margin: '5px 0px 0px 200px' }} className='' variant="outline-primary">Thêm Mới Danh Mục</Button></NavLink>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.categorys?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/admin/category/${item._id}/update`}><Button variant="outline-warning">Sửa</Button></Link>
                <Button style={{ marginLeft: '10px' }} onClick={() => props.onRemovee(item._id)} variant="outline-danger">Xóa</Button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default category