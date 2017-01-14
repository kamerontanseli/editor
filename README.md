# Editor.js
### A very small extensible WSYIWYG

# Example

```html
    <textarea></textarea>
    <script>
        var editor = new Editor("textarea");
        editor.addIcon("bold", "<b>B</b>", function(){
            document.execCommand("bold");
        });
    </script>
```

## Icon Sets

in /icon-sets/base-icons.js I have added a function `addIcons(editor)` which adds these icons:

- removeFormat
- undo
- redo
- bold
- italic
- strikethrough
- justifyLeft
- justifyCenter
- justifyRight
- insertOrderedList
- insertUnorderedList
- h1, h2, h3
- p
- images (Plus image resizer upon double click of image)

# Example
```javascript
    var editor = new Editor("textarea");
    addIcons(editor); // adds the icons
```
