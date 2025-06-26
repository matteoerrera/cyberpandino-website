import { CloseCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguagesSwitcher() {
    const { t, i18n } = useTranslation();
    const [openLanguages, setOpenLanguages] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [otherLanguages, setOtherLanguages] = useState(i18n.languages.filter(lang => lang !== currentLanguage));

    // Update languages
    useEffect(() => {
        setCurrentLanguage(i18n.language);
        setOtherLanguages(i18n.languages.filter(lang => lang !== i18n.language));
        localStorage.setItem("language", i18n.language);
    }, [i18n.language]);

    // Add local storage to save the language selected
    useEffect(() => {
        const language = localStorage.getItem("language");
        if (language) {
            i18n.changeLanguage(language);
        }
    }, []);

    return (
        <div className="flex-0 relative">
            <button 
                className="w-7 h-7 flex items-center justify-center hover:opacity-80 bg-opacity-5 rounded-full overflow-hidden" 
                onClick={() => setOpenLanguages(!openLanguages)}
                name="current-language"
            >
                {!openLanguages ? (
                    <img 
                        width={40} 
                        height={40} 
                        src={"/images/languages/" + currentLanguage + ".svg" } 
                        alt={currentLanguage} 
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <CloseCircle
                        size="40"
                        color="#FBBA64"
                        variant="Bold"
                    />
                )}
                
            </button>
            { openLanguages && (
                <ul className="absolute -bottom-3 left-[0] w-full h-auto translate-y-full">
                    { otherLanguages.map((language, index) => (
                        <li 
                            className="w-7 h-7 flex items-center justify-center hover:opacity-80 bg-opacity-5 rounded-full overflow-hidden"
                            key={index} 
                            onClick={() => {
                                i18n.changeLanguage(language);
                                setOpenLanguages(false);
                            }}
                        >
                            <img 
                                width={40} 
                                height={40} 
                                src={"/images/languages/" + language + ".svg" } 
                                alt={language} 
                                className="w-full h-full object-cover"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
