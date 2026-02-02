import {createContext, type ReactNode, useState} from "react";

interface SettingsContextType {
    fontArabic: number;
    setFontArabic(val: number): void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [fontArabic, setFontArabic] = useState(2.2);

    return (
        <SettingsContext.Provider value={{ fontArabic, setFontArabic }}>
            {children}
        </SettingsContext.Provider>
    )
}