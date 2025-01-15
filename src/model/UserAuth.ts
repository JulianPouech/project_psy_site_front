import { User } from "./User";

export class UserAuth
{
  public email:string
  public plainPassword:object;
  constructor()
  {
    this.email = "";
    this.plainPassword = {
		"repeatPassword":null
	 }
  }
}
