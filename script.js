//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
    // Get input values
    let blockId = document.getElementById("block_id").value.trim();
    let color = document.getElementById("colour_id").value.trim();

    // Reset all grid items to transparent
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Change color of selected block if valid ID is entered
    if (blockId >= 1 && blockId <= 9 && color !== "") {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert("Please enter a valid Block ID (1-9) and a color.");
    }
});

// Reset button functionality
document.getElementById("Reset").addEventListener("click", function () {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Clear input fields
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
});
