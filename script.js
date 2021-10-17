fixLastBoxBorder();

// Compute number of messages
setNbMessages();

// Attach click listeners to trash images
$("#mail-box").on("click", ".trash", function() {
    $(this).parent().remove();

    // Set last-row class to last visible mail
    fixLastBoxBorder();

    // Reset number of messages
    setNbMessages();
});

function fixLastBoxBorder() {
    $(".box").removeClass("last-box");
    $(".box").filter(function() {
        return ($(this).css("display") != "none")
    }).last().addClass("last-box");
}

function setNbMessages() {
    $("#mail-count-val").text(
        $(".mail").filter(function() {return ($(this).css("display") != "none")}).length
    );
}

// Add click listener to mail-add-btn
$("#mail-add-btn").click(function() {
    // Retrieve message and prepend message to mail-box
    let message = $("#mail-input").val();
    $("#mail-box").prepend(`<div class="mail box row">
        <img class="author-icon" src="assets/avatar-1.jpg" alt="">
        <div class="message column">
            <h6 class="author">Julien Caron</h6>
            <p class="content">${message}</p>
        </div>
        <img class="trash" src="assets/trash.png" alt="">
    </div>`);

    // Set last-row class to last visible mail
    fixLastBoxBorder();

    // Reset number of messages
    setNbMessages();

    // Reset input
    $("#mail-input").val("");
});

// Add click listener to search-btn
$("#search-btn").click(function() {
    // Retrieve search input
    let search = $("#search-input").val();

    // Show only messages with author == search
    $(".mail").each(function() {
        if ($(this).children(".message").first().children(".author").first().text() == search) {
            $(this).fadeIn();
        } else {
            $(this).fadeOut();
        }
    })

    // Set last-row class to last visible mail
    fixLastBoxBorder();
    
    // Reset number of messages
    setNbMessages();

    // Reset search
    $("#search-input").val("");
});

// Add click listener to reset-btn
$("#reset-btn").click(function() {
    $("#mail-box").children().each(function() {$(this).css("display", "flex")});

    // Set last-row class to last visible mail
    fixLastBoxBorder();
});
