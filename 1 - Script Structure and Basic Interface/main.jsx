(function() {
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
    btnFolderInput.onClick = function() {
        var f = Folder.selectDialog();

        if (f) {
            textFolderInput.text = f.fullName;
        }
    };

    btnOk.onClick = function() {
        w.close(1);
    };

    btnCancel.onClick = function() {
        w.close(0);
    };

    // SHOW THE WINDOW
    // w.show();

    if (w.show() == 1) {
        alert("Folder Selected")
    }
})();
