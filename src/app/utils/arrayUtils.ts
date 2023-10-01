import { logDev } from "./console";

export function arrayUnique<T extends Record<string, any>>(
  data: T[],
  propUniq = 'id'
): T[] {
  return data.filter(
    (v, i, a) => a.findIndex((v2) => v2[propUniq] === v[propUniq]) === i
  );
}

/**
 * filterTable
 * @param data > Array de objetos de la tabla
 * @param filter > Palabra clave a buscar
 * @param page > Indice de pagina que se desea se inicia en `uno`
 * @param length > Cantidad limite esperada
 */
export function filterTable<T extends Record<string, any>>(
  data: T[],
  filter = '',
  page = 1,
  length = 5
): T[] {
  const Filter = filter.toLocaleLowerCase();
  const Regex = new RegExp(Filter + '[^]*', 'g');
  let filterData: T[] = [];
  data.forEach((el) => {
    for (const k in el) {
      if (Object.prototype.hasOwnProperty.call(el, k)) {
        let element: any = el[k];
        if (typeof element === 'object') {
          element = JSON.stringify(element).toLocaleLowerCase();
          // const palabraEscapada = Filter.replace(/[.*+?^$|[\]\\]/g, '\\$&');
          const Regex2 = new RegExp(`${Filter}`, 'gi');
          if (element.match(Regex2)) {
            filterData.push(el);
            break;
          }
        } else {
          element = String(element).toLocaleLowerCase();

          if (element.match(Regex)) {
            filterData.push(el);
            break;
          }
        }
      }
    }
  });
  const p = page == 1 ? 0 : (page - 1) * length;
  return filterData.slice(p, (page - 1) * length + length);
}
