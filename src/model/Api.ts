import router from "@/router";

export enum Method{
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
}

/**
 * @param {string} url
 * @param {string} method
 * @param {object|null} body
 * @param {Headers} headers
 * @param {string} contentType
 * @returns {Response} response
 * @throws {Error} error
 * do request to api
 * @example request('exemple.wip/my-data',Method::POST,body)
*/
export async function request(url:string , method:string = Method.GET, body:Object|null = null ,headers = new Headers(),contentType = 'application/ld+json') {
      headers.append('Content-Type',contentType);

      let response:Response = new Response()

      if(body === null)
      {
        response = await fetch(url,{
          method:method,
          headers:headers,
          mode: "cors",
          credentials: "include"
        })
      }else
      {
        response = await fetch(url,{
          method:method,
          body:JSON.stringify(body),
          headers:headers,
          mode: "cors",
          credentials: "include"
        })
      }

      return response
}
export const url = import.meta.env.VITE_API_URL;
export const api = {request,Method,url}
