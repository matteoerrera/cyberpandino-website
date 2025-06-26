import { toast } from "react-toastify";
import { state } from '../store/state';
import { snapshot } from 'valtio';


export default async function sendRequest(path: string, options = {}, authentication = true, contentType = true, headersOptions = {}) {
    const positionSnap = snapshot(state.session.position);
    const headers = {
        ...(contentType && { 'Accept': 'application/json', }),
        ...(contentType && { 'Content-Type': 'application/json' }),
        ...(authentication && { 'Authorization': `Bearer ${localStorage.getItem('token')}` }),
        ...headersOptions,
        'X-Position': JSON.stringify(positionSnap.data || {})
    };

    const response = await fetch(`${getRootUrl()}${path}`, {
       method: 'POST',
        headers,
        credentials: 'same-origin',
        ...options,
    });    

    // Verifica se la risposta ed avvia il download del file
    if(response.headers.get('content-type')?.includes('application/pdf')) {
        const blob = await response.blob();
        console.log("BLOB:", blob);
        
        const url = URL.createObjectURL(blob);
        console.log("URL:", url);
        return url;
    }

    
    // Verifica se la risposta è vuota prima di tentare il parsing JSON
    const data = response.headers.get('content-type')?.includes('application/json') ? await response.json() : null;


    // Controlla se la risposta ha uno stato di successo (200-299)
    if (!response.ok) {
        toast.error(data.message);
        
        // Se la risposta ha un errore 403 cancella il token dell'utente ed  effettua il logout
        if (response.status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.reload();
        }
        
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

  

   
    // Inserisci un timeout per simulare un caricamento più lungo di 300ms
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (data && data.error) {        
        throw new Error(data.error);
    }

    return data;
}


function getRootUrl() {
    return import.meta.env.VITE_BASE_URL;
}

