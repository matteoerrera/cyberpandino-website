export interface ModalProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    onSubmit: (e:any) => void;
    onClose: () => void;
    labelSubmit?: string | null;
    labelClose: string
    classes?: string;
    visibility: boolean;
}