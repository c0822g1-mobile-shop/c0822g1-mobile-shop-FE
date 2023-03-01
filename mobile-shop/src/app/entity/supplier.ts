import {WareHousing} from "./ware-housing";

export interface Supplier {
  id?: number;
  code?: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  wareHousing?: WareHousing;
}
