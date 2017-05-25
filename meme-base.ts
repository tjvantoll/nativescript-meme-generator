import { ImageSource } from "tns-core-modules/image-source";
import { Property } from "tns-core-modules/ui/core/view";
import { Image } from "tns-core-modules/ui/image";
import { MemeGenerator } from "./";

export const topTextProperty = new Property<MemeBase, string>({ name: "topText", defaultValue: "" });
export const bottomTextProperty = new Property<MemeBase, string>({ name: "bottomText", defaultValue: "" });
export const fontSizeProperty = new Property<MemeBase, string>({ name: "fontSize", defaultValue: "" });
export const memeImageSourceProperty = new Property<MemeBase, string>({ name: "memeImageSource", defaultValue: "" });

export class MemeBase extends Image {
  topText: string;
  bottomText: string;
  fontSize: string;
  memeImageSource: ImageSource;

  generator: MemeGenerator;

  constructor() {
    super();
    this.generator = new MemeGenerator();
  }

  buildMeme() {
    if (!this.memeImageSource) {
      return;
    }

    let image = this.generator.generate({
      topText: this.topText,
      bottomText: this.bottomText,
      fontSize: this.fontSize,
      image: this.memeImageSource
    });

    this.set("imageSource", image);
  }

  [topTextProperty.setNative](value: string) {
    this.buildMeme();
  }
  [bottomTextProperty.setNative](value: string) {
    this.buildMeme();
  }
  [fontSizeProperty.setNative](value: number) {
    this.buildMeme();
  }
  [memeImageSourceProperty.setNative](value: ImageSource) {
    this.buildMeme();
  }
}

topTextProperty.register(MemeBase);
bottomTextProperty.register(MemeBase);
fontSizeProperty.register(MemeBase);
memeImageSourceProperty.register(MemeBase);
