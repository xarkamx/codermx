import { optionalFn } from "../../core/helpers";

export class BaseValidator {
  required(constrain, value) {
    if (!value) {
      return { valid: false, msg: `Es un campo requerido` };
    }
    return { valid: true };
  }

  validate() {
    let errors = {};
    let valid = 1;
    for (let key in this.constrains) {
      let value = this.model[key];
      let constrain = this.constrains[key];
      optionalFn(this[key])(key, value);
      for (let index in constrain) {
        let item = constrain[index];
        let validation = optionalFn(this[index])(item, value);
        if (typeof validation === "undefined") {
          continue;
        }
        if (!validation.valid) {
          valid = 0;
          if (!errors[key]) {
            errors[key] = [];
          }
          errors[key].push({
            msg: validation.msg,
            target: constrain.target || key,
          });
        }
      }
    }
    return { valid, err: errors };
  }
}
