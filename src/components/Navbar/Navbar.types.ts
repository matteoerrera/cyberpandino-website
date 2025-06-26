export interface NavbarProps {
    label: string;
    back: boolean;
    onClick?: () => void;
    icon?: any;
    variant?: "dark" | "light";
    backOnClick?: () => void;
}