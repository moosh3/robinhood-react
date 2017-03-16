import { Schema } from 'normalizr';

const user = new Schema('user');
const quote = new Schema('quote');

export const userSchema = user;
export const quoteSchema = quote;
