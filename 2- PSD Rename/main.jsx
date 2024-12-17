(function () {
    // The Script code goes inside this anonymous function.

    var g; // Group
    var p; // Panel
    var w; // Window

    // UI
    w = new Window("dialog", "Select PSD Folder");

    p = w.add("panel");

    g = p.add("group");

    var btnFolderInput = g.add("button", undefined, "Select Folder....");

    var textFolderInput = g.add("statictext", undefined, "", { truncate: "middle" });

    textFolderInput.preferredSize = [200, -1];

    g = w.add("group");

    g.alignChildren = "center";

    var btnOk = g.add("button", undefined, "OK");

    var btnCancel = g.add("button", undefined, "Cancel");

    // UI EVENT HANDLERS
    var selectedFolder;

    btnFolderInput.onClick = function () {
        var f = Folder.selectDialog("Select a folder containing PSD files");

        if (f) {
            selectedFolder = f;
            textFolderInput.text = f.fullName;
        }
    };

    btnOk.onClick = function () {
        if (selectedFolder) {
            var psdFiles = selectedFolder.getFiles("*.psd"); // Get all PSD files in the folder

            if (psdFiles.length > 0) {
                for (var i = 0; i < psdFiles.length; i++) {
                    var newFileName = selectedFolder.fullName + "/" + (i + 1) + ".psd";
                    psdFiles[i].rename(newFileName); // Rename the file
                }
                alert("Renamed " + psdFiles.length + " PSD files.");
            } else {
                alert("No PSD files found in the selected folder.");
            }
        } else {
            alert("Please select a folder first.");
        }
        w.close(1);
    };

    btnCancel.onClick = function () {
        w.close(0);
    };

    // SHOW THE WINDOW
    if (w.show() == 1) {
        // The folder selection and renaming logic are handled above.
    }
})();
