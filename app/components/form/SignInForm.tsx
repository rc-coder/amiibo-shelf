'use client';

import Link from 'next/link';
import { Button } from '../Button';
import InputBox from '../InputBox';
import { signIn } from 'next-auth/react';
import { useRef, useState } from 'react';
import { signInSchema } from '@/lib/schema';

type Props = {
  classname?: string;
  callbackUrl?: string;
};

const SignInForm = (props: Props) => {
  const formRef: any = useRef(null);
  const [validationError, setValidationError]: any = useState(null);

  const clientAction = async (formData: FormData) => {
    async function signInUser(formData: FormData) {
      const { username, password } = Object.fromEntries(formData.entries());

      const { error } = signInSchema.safeParse({
        username,
        password,
      });
      if (error) {
        return { error: error.format() };
      }

      await signIn('credentials', {
        username: username,
        password: password,
        redirect: true,
        callbackUrl: props.callbackUrl ?? '/',
      });
    }

    const result = await signInUser(formData);
    if (result?.error) {
      setValidationError(result.error);
    } else {
      setValidationError(null);
      formRef.current.reset();
    }
  };

  return (
    <div className={props.classname}>
      <div className="text-base font-semibold leading-6 text-white bg-teal-500 p-2 rounded-lg">
        Log In Form
      </div>

      <form
        action={clientAction}
        className="p-2 flex flex-col gap-3"
        ref={formRef}
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
          name="password"
          type="password"
          labelText="Password"
          placeholder="Our little secret"
          error={validationError ? true : false}
        ></InputBox>
        {validationError?.password && (
          <p className="text-red-400 text-sm ">
            {validationError.username._errors.join(', ')}
          </p>
        )}
        <div className="flex items-center justify-center mt-2 gap-2">
          <Button type="submit" className="w-28" variant="success">
            Log In
          </Button>
          <Link
            href={props.callbackUrl ?? '/SignUp'}
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Sign Up
          </Link>
          <Link
            href={props.callbackUrl ?? '/'}
            className="w-28 border border-red-600 text-center py-2 rounded-md text-red-600 transition hover:bg-red-600 hover:text-white hover:border-transparent active:scale-95"
          >
            Go back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
