chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "pronounceWord",
      title: "Pronounce this word",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pronounceWord") {
      const selectedText = info.selectionText;
      if (selectedText) {
        chrome.tts.speak(selectedText, {
          rate: 1.0,
          pitch: 1.0,
          lang: "en-US"
        });
      }
    }
  });
  