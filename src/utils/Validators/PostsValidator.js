import constrains from "./constrains/posts.json";
import { BaseValidator } from "./BaseValidator";
export class PostValidator extends BaseValidator {
  constructor(model) {
    super();
    this.model = model;
    this.constrains = constrains;
  }
}
