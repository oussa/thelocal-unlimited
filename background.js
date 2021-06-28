const styles = `
body .tp-modal .tp-iframe-wrapper {
  display: none; // hide popup
}

body .tp-backdrop {
  display: none !important; // remove gray background
}

body.tp-modal-open {
  overflow: auto !important; // restore scroll
  height: auto;
}
`;

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
