import { AddressUpdateManyWithoutMembersInput } from "./AddressUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  addresses?: AddressUpdateManyWithoutMembersInput;
  age?: string | null;
  email?: string | null;
  name?: string | null;
  sex?: string | null;
};
