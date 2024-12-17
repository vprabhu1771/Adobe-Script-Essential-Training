To save the current document in Adobe Photoshop as a JPEG with full resolution and maximum quality (12), you can use a JavaScript snippet. Here's how you can do it:

### Adobe Photoshop Script
```javascript
// Save the current document as a JPEG with quality 12
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Specify the file path for saving the JPEG
    var filePath = new File(doc.path + "/" + doc.name.replace(/\.[^\.]+$/, "") + ".jpg");

    // Define the JPEG save options
    var jpegOptions = new JPEGSaveOptions();
    jpegOptions.quality = 12; // Maximum quality
    jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    jpegOptions.embedColorProfile = true;

    // Save the document as JPEG
    doc.saveAs(filePath, jpegOptions, true);

    alert("Saved as JPEG at " + filePath.fsName);
} else {
    alert("No document is open.");
}
```

### Steps to Use the Script:
1. **Open Adobe Photoshop**: Open the document you want to save as JPEG.
2. **Open the Script Editor**:
   - Go to `File` > `Scripts` > `Script Editor`.
3. **Paste the Script**: Copy the above JavaScript code and paste it into the editor.
4. **Run the Script**: Execute the script by pressing the play button or saving it and running it via `File` > `Scripts` > `Browse`.

### Notes:
- The script checks if a document is open before executing.
- It saves the JPEG in the same folder as the original document with the same name, but with a `.jpg` extension.
- You can customize the file path (`filePath`) to save the JPEG to a different location if needed.

Let me know if you need help with further customization!