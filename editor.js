/**
 * Editor
 * @constructor
 * @param {[type]} el [description]
 */
function Editor(el) {
    this.init(el);
}

/**
 * The markup for the wsywiyg which comes after the textarea
 * @type {String}
 */
Editor.prototype.markup = "<div class='wsywiyg'>"
    + "<div class='wsywiyg-toolbar'></div>"
    + "<div class='wsywiyg-editor' contenteditable='true'></div>"
+"</div>";

/**
 * Initializes the wsywiyg and hides the textarea
 * @param  {HTMLElement} el [textarea element]
 */
Editor.prototype.init = function (el) {
    el = document.querySelector(el);
    el.style.display = "none";
    var parent = el.parentNode;
    el.outerHTML += this.markup;
    this.el = parent.querySelector(".wsywiyg");
    this.el.querySelector(".wsywiyg-editor").innerHTML = el.innerHTML;
};

/**
 * Adds an Icon to the Toolbar
 * @param {String}   name     [A identifier for the icon]
 * @param {String}   icon     [some HTML to put inside the button]
 * @param {Function} callback [a function that is called on click of the icon]
 */
Editor.prototype.addIcon = function (name, icon, callback) {
    var html = document.createElement("BUTTON");
    html.id = "icon-" + name;
    html.className = "wsywiyg-icon";
    html.innerHTML = icon;

    html.addEventListener("click", function (e) {
        e.preventDefault();
        var el = this.el.parentNode.querySelector(".wsywiyg-editor");
        el.focus();
        callback(el);
    }.bind(this));

    this.el.parentNode.querySelector(".wsywiyg-toolbar").appendChild(html);
};

/** Returns the value of the editor to be used in POST etc */
Editor.prototype.getValue = function () {
    return this.el.querySelector(".wsywiyg-editor").innerHTML;
};
