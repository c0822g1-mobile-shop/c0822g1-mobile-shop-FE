import {ImportsCommodityHistory} from "./imports-commodity-history";

export interface Supplier {
  id?: number;
  code?: string;
  name?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  importsCommodityHistory?: ImportsCommodityHistory;
}
