export class Cookie
{
  public name:string
  public value:string
  public expires:string
  public sameSite:string

  constructor(name:string ="",value:string="",expires:string = "",sameSite = "strict")
  {
    this.name = name;
    this.value = value
    this.expires = expires
    this.sameSite = sameSite
  }

  public toString()
  {
    return this.name+"="+
      this.value+";"+
      "expires="+this.expires+";"+
      "SameSite="+this.sameSite;
  }
  static addCookie(cookie:Cookie)
  {
    document.cookie=cookie.toString();
  }

  static getCookie(name:string){
    const cookies = document.cookie.split("=");
    const index = cookies.findIndex((key) => key === name);
    if(index === -1)
    {
      return new Cookie();
    }

    return new Cookie(cookies[index],
          cookies[index+1]
      );
  }
}
