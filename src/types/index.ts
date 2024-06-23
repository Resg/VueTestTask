// Список возможных цветов
export enum Color {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

// Продавец. Позиция в рейтинговой таблице определяется позицией в массиве продавцов
export interface Seller {
  // Любимый цвет
  color: Color;
  // Полное имя
  name: string;
  // Количество продаж
  sales: number;
  // Рейтинг продавца (выражен в баллах)
  rating: number;
}
