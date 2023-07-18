import React from 'react';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../stories/hktvMall/atom/Button';
import Input from '../../stories/hktvMall/atom/Input';
import TextBlock from '../../stories/hktvMall/molecules/TextBlock';

import { profileSchema } from '../../constance/yup-schema/profile';

interface IFormInput {
  'first-name': string;
  'last-name': string;
  'e-mail': string;
}

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div>
      <h1>Form</h1>
      <div className='border-[1px] border-[#e2e2e2]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[375px] grid grid-cols-2 gap-2 p-3'>
            <div className='col-span-2'>
              <TextBlock title='登入電郵地址:' content='test@gmail.com' />
            </div>
            <div className='col-span-2 text-start'>*必須填寫</div>
            <div className='col-span-1'>
              <Controller
                control={control}
                name='first-name'
                render={({ field: { onChange } }) => (
                  <Input
                    label='姓氏*'
                    onChange={onChange}
                    errorMsg={errors?.['first-name']?.message}
                  />
                )}
              />
            </div>
            <div className='col-span-1'>
              <Controller
                control={control}
                name='last-name'
                render={({ field: { onChange } }) => (
                  <Input
                    label='名稱*'
                    onChange={onChange}
                    errorMsg={errors?.['last-name']?.message}
                  />
                )}
              />
            </div>
            <div className='col-span-2'>
              <Controller
                control={control}
                name='e-mail'
                render={({ field: { onChange } }) => (
                  <Input
                    label='聯絡電郵地址*'
                    onChange={onChange}
                    errorMsg={errors?.['e-mail']?.message}
                  />
                )}
              />
            </div>
            <div className='col-span-2'>
              <TextBlock title='手機號碼:' content='+852 51337284' />
            </div>
            <div className='col-span-2'>
              <Button text='儲存' type='submit' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
