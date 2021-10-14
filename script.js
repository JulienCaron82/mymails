// Compute number of messages
setNbMessages();

// Attach click listeners to trash images
setTrashListeners();

function setNbMessages() {
    let nbMails = document.getElementsByClassName('message').length;
    let mailCounts = document.getElementsByClassName('mail-count-val');
    // Replace text of all mail-count-val elements
    for (let i=0;i<mailCounts.length;i++) {
        mailCounts[i].textContent = nbMails;
    }
}

// Add click listener to all trash elements
function setTrashListeners() {
    let trashElems = document.getElementsByClassName('trash');
    for (let i=0;i<trashElems.length;i++) {
        trashElems[i].addEventListener("click", function() {
            // Get parent element and remove it
            this.parentNode.remove();
            setNbMessages();
        });
    }
}

// Add click listener to mail-add-btn elements
let mailAddElems = document.getElementsByClassName('mail-add-btn');
for (let i=0;i<mailAddElems.length;i++) {
    let btn=mailAddElems[i];
    btn.addEventListener("click", function() {
        // Get message from input
        let newMailText = document.getElementById("mail-input").value;
    
        // Create new mail-elem div
        let newMail = document.createElement("div");
        newMail.classList.add("mail-elem", "row");

        // Append icon, message and trash to newMail
        let icon = document.createElement("img");
        icon.classList.add("author-icon");
        icon.src = "./assets/avatar-1.jpg";
        icon.alt = "avatar";

        let message = document.createElement("div");
        message.classList.add("message");

        let author = document.createElement("h6");
        author.classList.add("author");
        author.textContent = "Julien Caron";
        
        let content = document.createElement("p");
        content.classList.add("content");
        content.textContent = newMailText;

        message.appendChild(author);
        message.appendChild(content);

        let trash = document.createElement("img");
        trash.classList.add("trash");
        trash.src = "./assets/trash.png";
        trash.alt = "trash";

        // Add listener on new message
        trash.addEventListener("click", function() {
            // Get parent element and remove it
            this.parentNode.remove();
            setNbMessages();
        });

        newMail.appendChild(icon);
        newMail.appendChild(message);
        newMail.appendChild(trash);

        // Append newMail to mail-box
        let mailBox = document.getElementById("mail-box");
        mailBox.prepend(newMail);

        // Reset number of messages
        setNbMessages();

        // Reset input
        document.getElementById("mail-input").value = "";
    });
}