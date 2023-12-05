import { Member } from "../member/Member";

export type Address = {
  address1: string | null;
  address2: string | null;
  createdAt: Date;
  id: string;
  memberId?: Member;
  updatedAt: Date;
};
