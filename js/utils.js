// Purpose: Fonctions utilitaires globales
export const formatFCFA = (amount) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + " FCFA";
};

export const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};
