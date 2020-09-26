import { AuthFetch } from "../AuthFetch";
export class BaseController {
  async get(values) {
    let fetch = new AuthFetch(`${this.path}`);
    let data = await fetch.get(values);
    return data;
  }
  async show(id) {
    let fetch = new AuthFetch(`${this.path}/${id}`);
    let data = await fetch.get();
    return data;
  }
  async post(content = {}, hasFiles) {
    let fetch = new AuthFetch(`${this.path}`);
    let { code, data } = await fetch.post(content, hasFiles);
    if (code >= 300) {
      alert("algo salio mal");
    }
    return { content: data.content[0], code };
  }
  async put(id, content = {}) {
    let fetch = new AuthFetch(`${this.path}/${id}`);
    return fetch.put(content);
  }
  async delete(id) {
    let fetch = new AuthFetch(`${this.path}/${id}`);
    return fetch.delete();
  }
}
