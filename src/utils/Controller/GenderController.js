import { BaseController } from "./BaseController";

export class GenderController extends BaseController {
  path = "v2.0/generos";
  async get(values) {
    let { code, data } = await super.get(values);
    return { content: data.content, code };
  }
}
