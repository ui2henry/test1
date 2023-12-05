import { Address } from "../address/Address";

export type Member = {
  addresses?: Array<Address>;
  age: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  memberId: string;
  name: string | null;
  sex: string | null;
  updatedAt: Date;
};
