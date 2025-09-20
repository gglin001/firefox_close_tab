browser.action.onClicked.addListener((tab) => {
  browser.tabs.remove(tab.id);
});
