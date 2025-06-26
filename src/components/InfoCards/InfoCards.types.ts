export interface InfoCardsProps {
    image: string;
    afterImage: string;
    cards: [
        {
            value: string;
            unit: string;
            description: string;
        }
    ];
    classes?: string;
}