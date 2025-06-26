import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguagesSwitcher } from "./LanguagesSwitcher";
import { User } from "iconsax-react";

export function LogoBox(props) {
    const {className, size = 50} = props;

    return (
        <Link 
            to={"/"} 
            className={"p-4 rounded bg-white  inline-flex items-center justify-center " + (className ? ` ${className}` : "")}
        >
            <img 
                src="" 
                alt="Logo" 
                width={size}
                height={size}
                className="object-container block md:w-8 md:h-8"
            />
        </Link>
    )
}
