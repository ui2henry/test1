import { AddressUpdateManyWithoutMembersInput } from "./AddressUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  addresses?: AddressUpdateManyWithoutMembersInput;
  age?: string | null;
  email?: string | null;
  memberId?: string;
  name?: string | null;
  sex?: string | null;
};
