/**
 * Adds a basic toolbar of Icons using FontAwesome
 * @param {Editor} editor [Editor class]
 */
function addIcons(editor) {
    var icons = {
        "removeFormat": "ban",
        "undo": "undo",
        "redo": "repeat",
        "bold": "bold",
        "italic": "italic",
        "strikethrough": "strikethrough",
        "justifyLeft": "align-left",
        "justifyCenter": "align-center",
        "justifyRight": "align-right",
        "insertOrderedList": "list-ol",
        "insertUnorderedList": "list-ul",
    };

    Object.keys(icons).forEach(function (key) {
        editor.addIcon(key, "<i class='fa fa-"+ icons[key] +"'></i>", function () {
            document.execCommand(key);
        });
    });

    ["h1", "h2", "h3", "p"].forEach(function (heading) {
        editor.addIcon("heading-" + heading, heading.toUpperCase(), function () {
            document.execCommand("formatBlock", false, heading);
        });
    });

    editor.addIcon("image", "<i class='fa fa-picture-o'></i>", function () {
        var src = prompt("Link: ");
        if (src && src.length) {
            document.execCommand("insertImage", false, src);
        }
    });

    function toggleEdit() {
        var img = this;
        if (img.parentNode.className !== "wsywiyg-img-resizer") {
            var div = document.createElement("div");
            div.contentEditable = false;
            div.className = "wsywiyg-img-resizer";
            img.removeAttribute("style");
            img.parentNode.appendChild(div);
            div.appendChild(img);
        } else {
            var div = img.parentNode;
            img.style.width = div.style.width;
            img.style.height = div.style.height;
            img.parentNode.outerHTML = img.outerHTML;
            var event = new CustomEvent("input");
            editor.el.querySelector(".wsywiyg-editor").dispatchEvent(event);
        }
    }


    editor.el.querySelector(".wsywiyg-editor").addEventListener("input", function () {
        var imgs = this.querySelectorAll("img");
        Object.keys(imgs).forEach(function (index) {
            var img = imgs[index];
            img.removeEventListener("dblclick", toggleEdit)
            img.addEventListener("dblclick", toggleEdit);
        });
    });
}
