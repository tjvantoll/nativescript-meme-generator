import { ImageSource } from "image-source";
import { MemeBase } from "./meme-base";
export declare class MemeGenerator {
    generate(options: any): ImageSource;
}
export declare class Meme extends MemeBase {
    nativeView: android.widget.Button;
}
