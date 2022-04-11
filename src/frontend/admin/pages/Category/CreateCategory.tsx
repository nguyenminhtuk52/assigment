import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../../../types/category'
type CreateCategoryProps = {
  onAddd: (category: CategoryType) => void,
}
type formInput = {
  name: string
}
const CreateCategory = (props: CreateCategoryProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const navitage = useNavigate();
  const onSubmit: SubmitHandler<formInput> = (data: CategoryType) => {
    props.onAddd(data)
    navitage("/admin/category");
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Thêm Mới Danh Mục</h4></Form.Label>
          <Form.Group>
            <Form.Label>Nhập Tên Danh Mục</Form.Label>
            <Form.Control type="text" {...register('name', { required: true })}/>
            {errors.name && errors.name.type === "required" && <span className="validate">Tên danh mục không được để trống</span>}
            <br />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <script>

      </script>
    </div>
  )
}

export default CreateCategory