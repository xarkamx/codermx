import { BaseController } from "./BaseController";
import { AuthFetch } from "../AuthFetch";
export class PostsController extends BaseController {
  path = "v2.0/anuncios";
  /**
   * 
   * @param {fkcategoria,
    fkCiudad,
    fkCupon,
    fkEstado,
    fkGenero,
    fkseccion,
    correo,
    descripcion,
    nombre,
    precio,
    telefono,
    titulo,
    whatsapp,} param0 
   */
  post(postModel) {
    return super.post(postModel, true);
  }
  getAll({ values, itemsPerPage = 10 }) {
    let fetch = new AuthFetch(`${this.path}/${itemsPerPage}`);
    return fetch.get(values);
  }
  getByCategory({ id, values, itemsPerPage = 10 }) {
    let fetch = new AuthFetch(`${this.path}/categorias/${id}/${itemsPerPage}`);
    return fetch.get(values);
  }
  getByUserID({ id, values = {}, itemsPerPage = 10 }) {
    let fetch = new AuthFetch(`${this.path}/usuarios/${id}`);
    return fetch.get(values);
  }
  getByProfileID({ id, values = {}, itemsPerPage = 10 }) {
    let fetch = new AuthFetch(`${this.path}/perfiles/${id}/${itemsPerPage}`);
    return fetch.get(values);
  }
}
