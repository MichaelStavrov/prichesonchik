import React from 'react';
import { getUser } from '../main';

export const metadata = {
  title: '',
  description: '',
};

const ContactsPage = async () => {
  const users = await getUser();

  return <div>{users?.name}</div>;
};

export default ContactsPage;
