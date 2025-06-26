// Funzione che verifica se il badge è presente o meno nello stato globale
export const statusBadge = (id, userBadges) => {        
    if(userBadges && userBadges.find(badge => badge.id === id.toString())) {
        return true;
    } else {
        return false;
    }
};

