![Enhanced iFrame Security Logo](https://github.com/odacavo/enhanced-iframe-protection/blob/main/browser-api/src/icons/icon48.png?raw=true)

# Enhanced iFrame Protection - Browser Extension

Enhanced iFrame Protection (EIP) is a lightweight extension to automatically detect and provide verbose warnings for embedded `iframe` elements in order to protect against Browser-In-The-Browser (BITB) attacks.

# Screenshots
![Enhanced iFrame Security Screenshot](https://i.imgur.com/9bhKl6r.png)

In the above screenshot, a phishing website has embedded an `iframe` element within a div that has been styled to look like an actual browser window (with a fake URL bar claiming to be from `accounts.google.com`). 

This extension has detected the `iframe` and presented a security warning, highlighting the actual phishing domain as (`bigphish.ca`).

# Installation

- [Mozilla Firefox](https://addons.mozilla.org/en-CA/firefox/addon/enhanced-iframe-protection/)
- [Google Chrome](https://chrome.google.com/webstore/detail/enhanced-iframe-protectio/efankjkjendcjahollcfkfhdaffmpkck)
- [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/enhanced-iframe-protectio/nhagefgjgbhenhbjijbbnbfphjjdbhof)
- **Opera** - Pending review

## Contributing
Pull requests are welcome if you see a way to make this extension more efficient and lightweight. For major changes or feature additions, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)