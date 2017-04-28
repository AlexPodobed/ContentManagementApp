export interface TooltipPosition {
    x: number;
    y: number;
}

export interface Tooltip {
    text: string;
    position: TooltipPosition;
}

export interface CustomImage {
    id?: string;
    src: string;
    tooltip: Tooltip
}
