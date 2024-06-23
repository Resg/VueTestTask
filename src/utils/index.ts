import { Color } from '../types';

export const generateString = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const generateSellers = (count: number) => {
  const colors = [Color.RED, Color.GREEN, Color.BLUE];
  const sellers = [];
  for (let i = 0; i < count; i++) {
    const seller = {
      color: colors[Math.floor(Math.random() * colors.length)],
      name: `Seller ${generateString(Math.floor(Math.random() * 100))}`,
      sales: Math.floor(Math.random() * 1000),
      rating: Math.floor(Math.random() * 100),
    };
    sellers.push(seller);
  }
  return sellers;
};
