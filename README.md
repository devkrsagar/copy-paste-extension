🧩 Form Clipboard Paster – Chrome Extension
Developed by: Er. Mohammad Asif
Company: WebiMatic Solutions

📋 Description
Form Clipboard Paster is a Chrome extension developed to simplify data entry by automatically pasting structured clipboard data (in JSON format) into form fields (like <input>, <textarea>, and <select>) on any webpage.

This tool is ideal for developers, testers, data entry teams, and anyone dealing with repetitive form filling tasks.

🚀 Features
Paste JSON data from clipboard into matching form fields.

Supports <input>, <textarea>, and <select> fields.

Intelligent field matching using name attributes.

Triggering of native input/change events for better compatibility.

Clean and minimal popup interface.

Developed by WebiMatic Solutions.

🔧 How It Works
Copy JSON to clipboard in the following format:

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from WebiMatic!"
}
Navigate to any form page.

Click the extension icon in the Chrome toolbar.

Click the “Paste from Clipboard” button.

The fields will auto-fill based on matching names.

🖼️ Screenshots
(Add screenshots of your popup UI and example usage here)

🧑‍💻 Developer Info
Developer: Er. Mohammad Asif

Company: WebiMatic Solutions

Website: https://webimaticsolutions.com

🏗️ Installation
➤ From Chrome Web Store
(Once published, update this section with the Chrome Web Store link)

➤ Manual Installation
Clone or download this repository.

Go to chrome://extensions/ in your Chrome browser.

Enable Developer mode (top right).

Click “Load unpacked”.

Select the directory containing the extension.

📝 Manifest Configuration
json
Copy
Edit
{
  "manifest_version": 3,
  "name": "Form Clipboard Paster",
  "version": "1.0",
  "description": "Paste clipboard JSON into form fields on any page.",
  "developer": {
    "name": "Er. Mohammad Asif",
    "url": "https://webimaticsolutions.com"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "permissions": ["scripting", "activeTab", "clipboardRead"],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
💼 License
This project is open-source and available under the MIT License.

