import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MemberTitle } from "../member/MemberTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address1" source="address1" />
        <TextInput label="address2" source="address2" />
        <ReferenceInput
          source="memberId.id"
          reference="Member"
          label="member_id"
        >
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
