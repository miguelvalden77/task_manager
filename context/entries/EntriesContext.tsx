import { createContext } from "react";

interface contextProps {
    entries: []
}

export const EntriesContext = createContext({} as contextProps)
