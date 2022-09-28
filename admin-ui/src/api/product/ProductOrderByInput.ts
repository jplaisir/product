import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listPrice?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
