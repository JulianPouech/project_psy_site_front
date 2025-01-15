import { Address } from "./Address.ts";
import { UserAuth } from "./UserAuth.ts";
export class User extends UserAuth
{
  public address:Address
  constructor()
  {
    super();
    this.address = new Address();
  }
}
