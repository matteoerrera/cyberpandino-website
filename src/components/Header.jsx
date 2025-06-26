import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {

    return (
        <>
            <header className={`w-full`}>
                <div className="container">
                    <Link to="/">
                        <img src="./brand/cyberpandino-white.svg" alt="Logo" />
                    </Link>
                    {/* <ul>
                        <li>
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                    </ul> */}
                    <Link to="https://pixel.cyberpandino.com" className="btn">
                        <span className="mobile">Supportaci</span>
                        <span className="desktop">Supporta il progetto</span>
                    </Link>
                </div>
            </header>
        </>
    )
}
