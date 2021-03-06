import AuthLayout from "components/auth/layout";
import LoginForm from "components/auth/login";
import SignUpForm from "components/auth/sign-up";
import React from "react";
import { NextPageWithLayout } from "types/common";

const SignUpPage: NextPageWithLayout = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

SignUpPage.noNav = true;
SignUpPage.noPadding = true;
SignUpPage.back = {
  has: true,
  color: "white",
};

export default SignUpPage;
