import { BaseController } from "./BaseController";
import { AuthFetch } from "../AuthFetch";

export class CategoryController extends BaseController {
  path = "v2.0/categorias";
  pathProfile = "v2.0/categorias_perfiles";
  get(values) {
    if (!values) {
      return super.get();
    }
    const fetch = new AuthFetch(`${this.pathProfile}/categorias/${values.id}`);
    return fetch.get(values);
  }
}
