import { useEffect } from "react";

export const useDebounce = (value, delay, callback) => {

useEffect(() => {

const handler = setTimeout(() => {

callback();

}, delay);

return () => clearTimeout(handler);

}, [value]);

};
