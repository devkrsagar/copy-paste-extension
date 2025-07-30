document.getElementById("pasteBtn").addEventListener("click", async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    const formData = JSON.parse(clipboardText); // Expecting JSON

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: "PASTE_DATA", data: formData });
    });
  } catch (err) {
    alert("Failed to read or parse clipboard data: " + err.message);
  }
});
