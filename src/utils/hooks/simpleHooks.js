import { useReducer } from "react";
export function useCState(initState = {}) {
  return useReducer((prev, next) => ({ ...prev, ...next }), initState);
}
export function useQuery() {
  let search = window.location.search;
  let url = new URLSearchParams(search);
  let querys = {};
  for (let pair of url.entries()) {
    let key = pair[0];
    let value = pair[1];
    querys[key] = value;
  }
  return querys;
}
