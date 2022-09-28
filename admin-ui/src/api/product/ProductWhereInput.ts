import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";

export type ProductWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listPrice?: FloatNullableFilter;
  price?: FloatFilter;
  quantity?: IntFilter;
  title?: StringFilter;
};
