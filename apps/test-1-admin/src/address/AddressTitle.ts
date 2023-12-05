import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "address1";

export const AddressTitle = (record: TAddress): string => {
  return record.address1?.toString() || String(record.id);
};
