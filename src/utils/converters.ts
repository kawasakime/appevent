export const convertPrice = (num: number) => num.toLocaleString("ru");

export const convertNumberToArray = (num: number) => [...Array(num)].map((_, index) => index);
