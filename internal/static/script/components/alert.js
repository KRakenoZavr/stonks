export default class MessageBox {
    constructor(id, option, tool) {
        this.id = id;
        this.option = option;
        this.tool = tool;
    }

    show(msg, label = "CLOSE", callback = null) {
        if (this.id === null || typeof this.id === "undefined") {
            throw "Please set the 'ID' of the message box container.";
        }
        if (msg === "" || typeof msg === "undefined" || msg === null) {
            throw "The 'msg' parameter is empty.";
        }
        if (label === undefined || label === null) {
            label = "CLOSE"
        }
        let option = this.option;

        let msgboxArea = document.querySelector(this.id);
        let msgboxBox = document.createElement("div");
        let msgboxContent = document.createElement("div");
        let msgboxClose = document.createElement("a");

        switch (this.tool) {
            case 'alert':
                msgboxBox.style.backgroundColor = 'rgb(255, 0, 0, 0.5)';
                break
            case 'warning':
                msgboxBox.style.color = 'orange';
                break
            case 'accept':
                msgboxBox.style.backgroundColor = 'rgb(0, 255, 0, 0.5)';
                break
            default:
        }

        if (msgboxArea === null) {
            throw "The Message Box container is not found.";
        }

        // Content area of the message box
        msgboxContent.classList.add("msgbox-content");
        msgboxContent.innerHTML = msg;

        // Close burtton of the message box
        msgboxClose.classList.add("msgbox-close");
        msgboxClose.setAttribute("href", "#");
        msgboxClose.innerText = label;

        // Container of the Message Box element
        msgboxBox.classList.add("msgbox-box");
        msgboxBox.appendChild(msgboxContent);

        if (option.hideCloseButton === false ||
            typeof option.hideCloseButton === "undefined") {
            msgboxBox.appendChild(msgboxClose);
        }

        msgboxArea.appendChild(msgboxBox);

        msgboxClose.addEventListener("click", (evt) => {
            evt.preventDefault();
            if (msgboxBox.classList.contains("msgbox-box-hide")) {
                return;
            }

            this.hide(msgboxBox, callback);
        });

        if (option.closeTime > 0) {
            this.msgboxTimeout = setTimeout(() => {
                this.hide(msgboxBox, callback);
            }, option.closeTime);
        }
    }

    hide(msgboxBox, callback) {
        if (msgboxBox !== null) {
            msgboxBox.classList.add("msgbox-box-hide");
        }

        msgboxBox.addEventListener("transitionend", () => {
            if (msgboxBox !== null) {
                msgboxBox.parentNode.removeChild(msgboxBox);

                if (callback !== null) {
                    callback();
                }
            }
        });
    }
}
