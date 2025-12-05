function startEditing() {
    const pw = prompt("Enter password to edit:");
    if (pw !== "ruubot") return alert("Incorrect password.");

    document.querySelectorAll('[contenteditable]').forEach(el => {
        el.contentEditable = true;
        el.style.outline = "1px dashed gold";
    });

    alert("Edit mode enabled. Refresh page to exit.");
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

function searchPages() {
    // Placeholder: local static sites can't full-search
}
