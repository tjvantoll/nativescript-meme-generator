import { fromNativeSource, ImageSource } from "image-source";
import { Color } from "color";

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
