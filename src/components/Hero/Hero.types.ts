export interface HeroProps {
    brand?: string;
    title: string;
    description: string;
    image: string;
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