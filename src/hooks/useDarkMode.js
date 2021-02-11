import useLocalStorage from './useLocalStorage'


export default function useDarkMode(){

    const [value, setValue] = useLocalStorage('darkMode');

    return [value,setValue];
}