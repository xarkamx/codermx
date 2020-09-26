import { AuthFetch } from "../AuthFetch";

export class PlaceController {
  cityPath = "v2.0/ciudades";
  statePath = "v2.0/estados";
  async getStates() {
    let fetch = new AuthFetch(`${this.statePath}`);
    let data = (await fetch.get()).data;
    return data;
  }
  async getCities(id) {
    let fetch = new AuthFetch(`${this.cityPath}/${id}`);
    let data = (await fetch.get()).data;
    return data;
  }
  post() {}
  put() {}
  delete() {}
}
