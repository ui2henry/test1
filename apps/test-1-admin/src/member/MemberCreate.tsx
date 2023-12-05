import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="addresses"
          reference="Address"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AddressTitle} />
        </ReferenceArrayInput>
        <TextInput label="age" source="age" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="member_id" source="memberId" />
        <TextInput label="name" source="name" />
        <TextInput label="sex" source="sex" />
      </SimpleForm>
    </Create>
  );
};
