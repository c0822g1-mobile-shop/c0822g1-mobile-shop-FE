import {BillHistory} from "./bill-history";
import {ImportsCommodityHistory} from "./imports-commodity-history";

export interface Commodity {
  id?: number;
  name?: string;
  cpu?: string;
  capacity?: string;
  trademark?: string;
  price?: number;
  image?: string;
  camera?: string;
  selfie?: string;
  screenSize?: string;
  guarantee?: string;
  origin?: string;
  description?: string;
  code_qr?: string;
  quantity?: number;
  billHistory?: BillHistory;
  importsCommodityHistory?: ImportsCommodityHistory;
}
