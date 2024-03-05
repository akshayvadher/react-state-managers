import { atom } from "jotai/index";
import { useAtomValue, useSetAtom } from "jotai";

const ca = atom(0);

const caValue = atom((get) => get(ca));
const increamentCa = atom(null, (get, set) => {
  set(ca, get(ca) + 1);
});
const doubleCount = atom((get) => get(ca) * 2);
export const useCount = () => useAtomValue(caValue);
export const useIncrement = () => useSetAtom(increamentCa);
export const useDouble = () => useAtomValue(doubleCount);
