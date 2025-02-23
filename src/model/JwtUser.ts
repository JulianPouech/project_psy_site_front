export class JwtUser{
  public roles:Array<string>
  public username:string
  public id:number

  constructor()
  {
    this.roles = []
    this.username = ''
    this.id = 0
  }

}
