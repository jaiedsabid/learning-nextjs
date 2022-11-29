const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/learning-nextjs' : '';

export { prefix, isProd };
