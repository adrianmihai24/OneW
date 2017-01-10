/**
 * Onew
 */
interface Onew {
    init(): void;
}

declare let Onew: Onew;

declare module "onew" {
    export = Onew;
}

/**
 * OnewMDB
 */
interface OnewMDB {
    init(): void;

    datePicker(options?: any): void;
    timePicker(options?: any): void;

    modalInit(options?: any): void;
    modalAction(action: string): void;

    tooltip(options?: any): void;
    tooltipAction(action: string, selector?: string): void;

    selectInit(selector?: string): void;
    selectDestroy(selector?: string): void;

    sideNav(options?: any, selector?: string): void;

    tagChipInit(data: any[], selector?: string): void;
    tagChipAction(action: string): void;
    tagChipPlaceholder(placeholder: string, secondaryPlaceholder: string): void;

    characterCounter(): void;

    dropdown(action?: string): void;

    tabs(action?: string): void;

    lightbox(): void;

    collapse(options?: any): void;

    popover(options?: any): void;
}

declare let OnewMDB: OnewMDB;

declare module "onewmdb" {
    export = OnewMDB;
}