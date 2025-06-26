export interface HeroOldProps {
    brand?: string;
    title: string;
    description: string;
    image?: string;
    video?: string;
    buttons: [
        {
            label: string;
            onClick: () => void;
            variant: "primary" | "secondary";
        }
    ];
    stats: [
        {
            label: string;
            value: string;
            um: string;
        }
    ];
    classes?: string;
}