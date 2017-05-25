import { fromNativeSource, ImageSource } from "image-source";

import { MemeBase, topTextProperty } from "./meme-base";

export class MemeGenerator {
  generate(options) {
    var topText = options.topText || "";
    var bottomText = options.bottomText || "";
    var fontSize = options.fontSize || 30;
    var image = options.image;

    var paint = new android.graphics.Paint();
    paint.setStyle(android.graphics.Paint.Style.FILL);
    paint.setColor(android.graphics.Color.BLACK);
    paint.setTextAlign(android.graphics.Paint.Align.LEFT);
    paint.setTextSize(fontSize);

    var type = android.graphics.Typeface.create("Helvetica",
      android.graphics.Typeface.BOLD);
    paint.setTypeface(type);

    // Android makes you create a mutable Bitmap from an immutable one. Because.
    var bitmap = image.android.copy(android.graphics.Bitmap.Config.ARGB_8888, true);

    var canvas = new android.graphics.Canvas(bitmap);
    canvas.drawText(topText, 30, 60, paint);
    canvas.drawText(bottomText, 30, bitmap.getHeight() - 60, paint);

    return fromNativeSource(bitmap);
  }
}

export class Meme extends MemeBase {
  nativeView: android.widget.Button;

  [topTextProperty.setNative](value: string) {
    this.nativeView.setText(value);
  }
}
