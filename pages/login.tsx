import AuthLayout from 'components/auth/layout';
import LoginForm from 'components/auth/login';
import React from 'react';
import { NextPageWithLayout } from 'types/common';

const LoginPage : NextPageWithLayout = () =>{
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

LoginPage.noNav = true;
LoginPage.noPadding=true;
LoginPage.back = {
  has:true,
  color:"white",
}
export default LoginPage;