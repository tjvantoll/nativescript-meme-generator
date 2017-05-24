import { isAndroid } from "platform";
import * as application from "application";
import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { fromFileOrResource, ImageSource } from "image-source";
import { MemeGenerator } from "nativescript-meme-generator";

let pageData = new Observable();
var originalImage = fromFileOrResource("~/images/0.png");

declare var android: any;

export function onNavigatingTo(args: EventData) {
  let page = <Page>args.object;

  // Prevent the soft keyboard from showing initially when textfields are present
  if (isAndroid) {
     application.android.startActivity.getWindow().setSoftInputMode(
     android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN);
 }

  pageData.set("topText", "Building apps with NativeScript");
  pageData.set("bottomText", "is awesome!");
  pageData.set("fontSize", 30);
  pageData.set("image", originalImage);

  page.bindingContext = pageData;
}

export function generateMeme() {
  let memeGenerator = new MemeGenerator();
  let meme = memeGenerator.generate({
    topText: pageData.get("topText"),
    bottomText: pageData.get("bottomText"),
    image: originalImage,
    fontSize: pageData.get("fontSize")
  });
  pageData.set("image", meme);
}
