chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PASTE_DATA") {
    const data = message.data;

    for (const key in data) {
      const value = data[key];
      if (value === "") continue; // skip blank values

      // Match field by name or id
      const field = document.querySelector(`[name="${key}"], #${key}`);
      if (!field) continue;

      if (field.tagName === "SELECT") {
        const matchOption = Array.from(field.options).find(opt => opt.value === value || opt.text === value);
        if (matchOption) {
          field.value = matchOption.value;
        }
      } else {
        field.value = value;
      }

      // Trigger events
      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }
});
