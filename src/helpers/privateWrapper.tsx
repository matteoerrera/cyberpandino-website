import { Navigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { state } from "../store/state";


export const PrivateWrapper = ({ children }:any) => {
    const snapApp = useSnapshot(state.app)
    const snapUser = useSnapshot(state.user)
    const snapSession = useSnapshot(state.session)
    const isAuthenticated = !!snapUser.data;
    const isLoading = snapUser.loading; 

    // Se non e' autenticato e non e' in loading attendo 3 secondi e rifaccio la verifica
    /* if (!isAuthenticated && !isLoading) {
        setTimeout(() => {
            isAuthenticated = !!snapUser.data;
            isLoading = snapUser.loading;
        }, 3000);
    } */
    

    /* // Se non ho il token dell'utente lo rimando alla pagina di login
    if (!snapSession.token) {
        return <Navigate to="/welcome" />
    } */

    if (isAuthenticated) {         
        return children
    } else if (!isLoading) {        
        return <Navigate to="/welcome" />
    }

    
    return null;
}