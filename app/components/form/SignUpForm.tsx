'use client';

import { useRef, useState } from 'react';
import { createUser } from './actions';
import InputBox from '../InputBox';
import { Button } from '../Button';
import Link from 'next/link';

export const SignUpForm = () => {
  const formRef: any = useRef(null);
  const [validationError, setvalidationError]: any = useState(null);

  const clientAction = async (formData: FormData) => {
    const result = await createUser(formData);
    if (result?.error) {
      setvalidationError(result.error);
    } else {
      setvalidationError(null);
      formRef.current.reset();
    }
  };

  return (
    <div>
      <div className="text-base font-semibold leading-6 text-gray-900 bg-gradient-to-b from-slate-50 to-slate-200 p-2 w-full">
        Sign up Form
      </div>
      <form
        action={clientAction}
        ref={formRef}
        className="p-2 flex flex-col gap-3"
      >
        <InputBox
          name="username"
          type="text"
          labelText="Username"
          placeholder="Your awesome username"
          error={validationError ? true : false}
        ></InputBox>
        {validationError?.username && (
          <p className="text-red-400 text-sm ">
            {validationError.username._errors.join(', ')}
          </p>
        )}

        <InputBox
          name="email"
          type="email"
          labelText="Email"
          placeholder="awesome@mail.com"
          error={validationError ? true : false}
        ></InputBox>
        {validationError?.email && (
          <p className="text-red-400 text-sm ">
            {validationError.email._errors.join(', ')}
          </p>
        )}

        <InputBox
          name="password"
          type="password"
          labelText="Password"
          placeholder="This is our secret"
          error={validationError ? true : false}
        ></InputBox>
        {validationError?.password && (
          <p className="text-red-400 text-sm ">
            {validationError.password._errors.join(', ')}
          </p>
        )}

        <InputBox
          name="confirm"
          type="password"
          labelText="Confirm"
          placeholder="Confirm our secret"
          error={validationError ? true : false}
        ></InputBox>
        {validationError?.confirm && (
          <p className="text-red-400 text-sm ">
            {validationError.confirm._errors.join(', ')}
          </p>
        )}
        <div className="flex items-center justify-center mt-2 gap-2">
          {' '}
          <Button type="submit" className="w-28">
            Sign Up
          </Button>
          <Link
            href="/SignIn"
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Sign In
          </Link>
          <Link
            href="/"
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Go back
          </Link>
        </div>
      </form>
    </div>
  );
};
