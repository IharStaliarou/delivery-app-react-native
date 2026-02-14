import slugify from 'slugify';

export const generateSlug = (str: string): string => {
  return slugify(str, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true,
    locale: 'vi',
    trim: true,
  });
};
