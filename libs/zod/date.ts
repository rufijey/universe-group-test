import { z } from 'zod';

export const zodDateString = z.preprocess((val) => {
  if (typeof val === 'string' && !isNaN(Date.parse(val))) {
    return new Date(val);
  }
  return val;
}, z.date());