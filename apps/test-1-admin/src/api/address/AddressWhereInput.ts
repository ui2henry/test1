import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AddressWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  id?: StringFilter;
  memberId?: MemberWhereUniqueInput;
};
