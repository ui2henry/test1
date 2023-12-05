import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type AddressCreateInput = {
  address1?: string | null;
  address2?: string | null;
  memberId: MemberWhereUniqueInput;
};
