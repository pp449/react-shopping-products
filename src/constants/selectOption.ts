export const CATEGORY = {
  전체: "all",
  패션: "fashion",
  건강: "fitness",
  전자제품: "electronics",
  주방: "kitchen",
  음료: "beverage",
  도서: "books",
};

export type Category = keyof typeof CATEGORY;

export const SORT = {
  "낮은 가격순": "price,id,asc",
  "높은 가격순": "price,id,desc",
};

export type Sort = keyof typeof SORT;
