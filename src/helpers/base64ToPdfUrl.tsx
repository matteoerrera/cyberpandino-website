export function base64ToPdfUrl(base64String: string) {
    return `data:application/pdf;base64,${base64String}`;
}