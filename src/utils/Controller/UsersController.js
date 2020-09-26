import { AuthFetch } from "../AuthFetch";
import { BaseController } from "./BaseController";
import { LoginManager } from "../LoginManager";

export class UsersController extends BaseController {
  path = "v2.0/usuarios";
  authPath = "v2.0/login";
  register = "v2.0/registrar";
  /**
   * Envia un request al endpoint de login
   * @param {user,password} param0
   */
  async login({ email, password }) {
    let fetch = new AuthFetch(this.authPath);
    let result = await fetch.post({ email, password });
    const lm = new LoginManager();
    result.expires_in = 3600 * 24;
    if (result.code === 200) lm.login(result);
    return result;
  }
  async update(id, userModel) {
    let fetch = new AuthFetch(`${this.path}/${id}`);
    let result = await fetch.post(userModel, true);
    return result;
  }
  async post(userModel) {
    let fetch = new AuthFetch(this.register);
    let result = await fetch.post(userModel, true);
    return result;
  }
  async checkForMail(email) {
    let fetch = new AuthFetch(this.path + "/correo");
    return fetch.post({ email });
  }
  me() {
    let lm = new LoginManager();
    if (lm.isLogged()) return lm.getToken().data.content[0];
    return {};
  }
}
