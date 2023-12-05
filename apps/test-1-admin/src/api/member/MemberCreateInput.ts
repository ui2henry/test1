import { AddressCreateNestedManyWithoutMembersInput } from "./AddressCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  addresses?: AddressCreateNestedManyWithoutMembersInput;
  age?: string | null;
  email?: string | null;
  memberId: string;
  name?: string | null;
  sex?: string | null;
};
