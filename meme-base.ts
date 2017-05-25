import { ImageSource } from "tns-core-modules/image-source";
import { Property, View } from "tns-core-modules/ui/core/view";
import { Image } from "tns-core-modules/ui/image";

export const topTextProperty = new Property<MemeBase, string>({ name: "topText", defaultValue: "" });
export const bottomTextProperty = new Property<MemeBase, string>({ name: "bottomText", defaultValue: "" });
export const fontSizeProperty = new Property<MemeBase, string>({ name: "fontSize", defaultValue: "" });
export const memeImageProperty = new Property<MemeBase, string>({ name: "memeImage", defaultValue: "" });

export class MemeBase extends Image {
  topText: string;
  bottomText: string;
  fontSize: string;
  memeImage: ImageSource;
}

topTextProperty.register(MemeBase);
bottomTextProperty.register(MemeBase);
fontSizeProperty.register(MemeBase);
memeImageProperty.register(MemeBase);
