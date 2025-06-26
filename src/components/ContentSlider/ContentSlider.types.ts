export interface ContentSliderProps {
    content: {
        title: string;
        text: string;
        image?: string;
        video?: string;
    }[];
    classes?: string;
}