import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { readd } from '../../../api/category'
import { CategoryType } from '../../../types/category';

type UpdateCategoryProps = {
  onUpdatee: (category: CategoryType) => void
}
type FormInputs = {
  name: string
}
const UpdateCategory = (props: UpdateCategoryProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await readd(_id);
      reset(data);
    }
    getCategory();
  }, [])
  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdatee(data);
    navigate("/admin/category");
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Cập Nhật Danh Mục</h4></Form.Label>
          <Form.Group>
            <Form.Label>Nhập Tên Danh Mục</Form.Label>
            <Form.Control type="text" {...register('name', { required: true })} />
          </Form.Group>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UpdateCategory