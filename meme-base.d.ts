import { ImageSource } from "tns-core-modules/image-source";
import { Property } from "tns-core-modules/ui/core/view";
import { Image } from "tns-core-modules/ui/image";
export declare const topTextProperty: Property<MemeBase, string>;
export declare const bottomTextProperty: Property<MemeBase, string>;
export declare const fontSizeProperty: Property<MemeBase, string>;
export declare const memeImageProperty: Property<MemeBase, string>;
export declare class MemeBase extends Image {
    topText: string;
    bottomText: string;
    fontSize: string;
    memeImage: ImageSource;
}
