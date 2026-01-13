import { Button, Input } from 'antd';
import { createUser } from '@/app/main';
import Form from 'next/form';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const CreateUserForm = () => {
  async function addUser(formData: FormData) {
    'use server';

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    await createUser(name, phone);

    revalidatePath('/admin');
    redirect('/admin');
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Form action={addUser} className='space-y-6'>
        <div>
          <label htmlFor='name'>Name</label>
          <Input id='name' name='name' style={{ width: 300 }} />
        </div>
        <div>
          <label htmlFor='phone'>Content</label>
          <Input id='phone' name='phone' style={{ width: 300 }} />
        </div>
        <Button htmlType='submit'>Add User</Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;
