import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: 'Username must be at least 4 characters long' }),
    email: z.string().email({ message: 'Must be a valid email address' }),
    password: z.string().refine((val) => val.length >= 6 && val.length <= 12, {
      message: 'Password must be between 4 and 12 characters long',
    }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'La contraseña no coincide',
    path: ['confirm'],
  });

export const signInSchema = z.object({
  username: z.string().min(1, { message: 'Required' }),
  password: z.string().min(1, { message: 'Required' }),
});
