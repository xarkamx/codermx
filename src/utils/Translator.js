import sentense from "../assets/store/lang.json";
/* eslint eqeqeq: 0*/
/**
 * @description Permite obtener la traduccion
 *  de una cadena de texto basado en su llave.
 * @param string name
 */
export class Translator {
  constructor(name = "") {
    this.language = process.env.REACT_APP_LANG || "es";
    this.name = name;
  }
  /**
   * @description Obtiene la traduccion en base al name de la frase
   * @param string mod
   */
  get(mod = null) {
    const { language, name } = this;
    let text = sentense[name];
    return text ? text[language] : name;
  }
  /**
   * @description selecciona el name de la frase que se desea traducir
   * @param string name
   */
  setname(name) {
    this.name = name;
    return this;
  }
}
export function findOriginal(text, lang = "es") {
  let values = sentense;
  for (let key in values) {
    const content = values[key][lang];
    if (content == text) {
      return key;
    }
  }
  return text;
}
