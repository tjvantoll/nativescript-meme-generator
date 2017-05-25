import { ImageSource } from "tns-core-modules/image-source";
import { Property } from "tns-core-modules/ui/core/view";
import { Image } from "tns-core-modules/ui/image";

export const topTextProperty = new Property<MemeBase, string>({ name: "topText", defaultValue: "" });
export const bottomTextProperty = new Property<MemeBase, string>({ name: "bottomText", defaultValue: "" });
export const fontSizeProperty = new Property<MemeBase, string>({ name: "fontSize", defaultValue: "" });
export const memeImageSourceProperty = new Property<MemeBase, string>({ name: "memeImageSource", defaultValue: "" });

export class MemeBase extends Image {
  topText: string;
  bottomText: string;
  fontSize: string;
  memeImageSource: ImageSource;
}

topTextProperty.register(MemeBase);
bottomTextProperty.register(MemeBase);
fontSizeProperty.register(MemeBase);
memeImageSourceProperty.register(MemeBase);
