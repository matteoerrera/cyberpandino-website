export function distanceCalculator(coordinates: { lat1: string, lon1: string, lat2: string, lon2: string }) {
    const { lat1, lon1, lat2, lon2 } = coordinates;
    
    // Converti le stringhe in numeri
    const coords = {
      lat1: parseFloat(lat1),
      lon1: parseFloat(lon1),
      lat2: parseFloat(lat2),
      lon2: parseFloat(lon2)
    };

    // Formula di Haversine
    const R = 6371; // Raggio della Terra in km
    const dLat = toRad(coords.lat2 - coords.lat1);
    const dLon = toRad(coords.lon2 - coords.lon1);
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
             Math.cos(toRad(coords.lat1)) * Math.cos(toRad(coords.lat2)) *
             Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    
    return d.toFixed(2).toString();
}

// Funzione helper per convertire gradi in radianti
const toRad = (degrees: number) => {
    return degrees * (Math.PI / 180);
};