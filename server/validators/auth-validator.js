const { z } = require('zod');

const signupSchema = z.object({
  username: z
    .string({ required_error: ' Name is required' })
    .trim()
    .min(3, { message: 'Name must be at least of 3 characters.' })
    .max(255, { message: 'name must not be more than 255 characters' }),
  email: z
    .string({ required_error: 'Email is  required' })
    .trim()
    .email({ message: 'Invalid Email address' })
    .min(3, { message: 'Email must be at least of 3 characters.' })
    .max(255, { message: 'Email must not be more than 255 characters' }),
  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    .min(10, { message: 'Phone must be at least of 10 characters.' })
    .max(20, { message: 'Phone must not be more than 20 characters' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least of 6 characters.' })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

module.exports = signupSchema;
