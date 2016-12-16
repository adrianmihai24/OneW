interface DebugButton {
    init(): void;
    clipboard(selector:string, text:any): boolean;
    clipboardDestroy(clipboard:any): any;
    download(data:any, fileName:string, mimeType:string): boolean;
}

declare let DebugButton: DebugButton;

declare module "debug-button" {
    export = DebugButton;
}
