import { Ajax } from "../core/ajax";
import { DOM } from "../core/dom";

export function insteadIMG(path) {
  let img = path !== "" ? path : "https://picsum.photos/200/300";
  return img;
}
/**
 * Convierte cualquier arreglo de objetos en un archivo csv
 * @param [{*}] args
 */
export function arrayToCsv(args, titles = null, filename) {
  let csv = [];
  if (titles) {
    csv.push(join(titles, ",", []));
  }
  for (let items of args) {
    const values = Object.values(items);
    csv.push(join(values, ",", []));
  }
  let csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
  var encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + ".csv");
  document.body.appendChild(link); // Required for FF
  link.click();
}
/**
 * turn array into string
 * @param [] args
 * @param string separator
 * @param [int] skip
 */
export function join(args, separator = ",", skip = []) {
  args = args.filter((item, key) => {
    return !skip.includes(key);
  });
  return args.join(separator);
}
export function printURL(path) {
  new DOM();

  path = envPath(path);
  new Ajax().fetchHTML(path).then((content) => {
    let html = document.createElement("div");
    html.innerHTML = content;
    html.print();
  });
}
export function envPath(path) {
  const url =
    window.location.hostname === "localhost"
      ? process.env.REACT_APP_LOCAL_URL
      : process.env.REACT_APP_API_URL;
  return `${url}/${path}`;
}
