import { z } from 'zod';

export const reservationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name too long'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
  date: z
    .date()
    .min(new Date(), 'Date must be in the future'),
  time: z
    .string()
    .min(1, 'Please select a time'),
  guests: z
    .string()
    .min(1, 'Please select number of guests'),
  occasion: z
    .string()
    .optional(),
  seatingPreference: z
    .string()
    .optional(),
  specialRequests: z
    .string()
    .max(500, 'Special requests too long')
    .optional(),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(1, 'Please select a subject'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message too long'),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
