import CreateUserForm from '@/components/CreateUserForm/CreateUserForm';
import UserList from '../../components/UserList/UserList';

const AdminPage = () => {
  return (
    <div>
      <CreateUserForm />
      <UserList />
    </div>
  );
};

export default AdminPage;
