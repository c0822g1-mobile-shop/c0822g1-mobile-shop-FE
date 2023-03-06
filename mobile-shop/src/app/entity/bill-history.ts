import {Commodity} from "./commodity";
import {Bill} from "./bill";
import {User} from "./user";

export interface BillHistory {
  id?: number;
  idCommodity?: number;
  billId?: number;
  userId?: number

  commodity?: Commodity;
  bill?: Bill;
  user?: User;
}
