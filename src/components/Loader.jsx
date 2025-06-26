import React, { useEffect } from "react";
import { SpinnersRotation } from "./SpinnersRotation";
import { showDialog } from "../helpers/showDialog";
import { closeDialog } from "../helpers/closeDialog";

export function Loader() {


    // Quando renderizzo il componente Loader, blocco lo scroll
    useEffect(() => {
        showDialog();
    }, [])

    // Quando il componente Loader viene smontato, riattivo lo scroll
    useEffect(() => {
        return () => {
            closeDialog();
        }
    }, [])

    return (
        <div className="componentLoader">
            <SpinnersRotation width="50" height="50" />
        </div>
    )
}
