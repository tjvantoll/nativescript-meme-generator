import { fromNativeSource, ImageSource } from "image-source";
import { Color } from "color";

import { MemeBase, topTextProperty, bottomTextProperty, fontSizeProperty, memeImageProperty } from "./meme-base";

var font;
var uiImage;

function drawTextOnImage(options) {
  var rect = CGRectMake(options.x, options.y, uiImage.size.width - 50, uiImage.size.height);

  // Draw the text into the image
  var textString = NSString.alloc().initWithString(options.text);
  textString.drawInRectWithFont(rect, font);
}

export class MemeGenerator {
  generate(options) {
    var topText = options.topText || "";
    var bottomText = options.bottomText || "";
    var fontSize = options.fontSize || 30;

    // Set the font size to use for all text
    font = UIFont.boldSystemFontOfSize(fontSize);

    // Store off a reference to the UIImage
    uiImage = options.image.ios;

    UIGraphicsBeginImageContext(uiImage.size);

    // Draw the original image in
    uiImage.drawInRect(
      CGRectMake(0, 0, uiImage.size.width, uiImage.size.height)
    );

    drawTextOnImage({ text: topText, x: 30, y: 30 });
    drawTextOnImage({
      text: bottomText,
      x: 30,
      y: uiImage.size.height - 100
    });

    // Get the newly created image
    var newImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    // Return the image as an ImageSource
    return fromNativeSource(newImage);
  }
}

/*export class Meme extends MemeBase {
  generator: MemeGenerator;
  nativeView: UIImageView;

  constructor() {
    super();
    this.generator = new MemeGenerator();
    this.nativeView = UIImageView.new();
  }

  buildMeme() {
    if (!this.image) {
      return;
    }

    let image = this.generator.generate({
      topText: this.topText,
      bottomText: this.bottomText,
      fontSize: this.fontSize,
      image: this.image
    });

    this.nativeView.image = image.ios;
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
  [imageProperty.setNative](value: ImageSource) {
    this.buildMeme();
  }
}
*/

export class Meme extends MemeBase {
  generator: MemeGenerator;

  constructor() {
    super();
    this.generator = new MemeGenerator();
    console.log("1");
  }

  buildMeme() {
    console.log("2");
    if (!this.memeImage) {
      return;
    }

    console.log("3");
    let image = this.generator.generate({
      topText: this.topText,
      bottomText: this.bottomText,
      fontSize: this.fontSize,
      image: this.memeImage
    });

    console.log("4");

    this.ios.image = image.ios;
    this.requestLayout();
  }

  [topTextProperty.setNative](value: string) {
    console.log("6");
    this.buildMeme();
  }
  [bottomTextProperty.setNative](value: string) {
    console.log("7");
    this.buildMeme();
  }
  [fontSizeProperty.setNative](value: number) {
    console.log("8");
    this.buildMeme();
  }
  [memeImageProperty.setNative](value: ImageSource) {
    console.log("9");
    this.buildMeme();
  }
}
