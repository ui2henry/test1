import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MemberWhereInput = {
  addresses?: AddressListRelationFilter;
  age?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  memberId?: StringFilter;
  name?: StringNullableFilter;
  sex?: StringNullableFilter;
};
