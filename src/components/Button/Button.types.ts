export interface ButtonProps {
    label: string | JSX.Element;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "float" | "danger";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    classes?: string;
    loading?: boolean;
}