resoveIssues.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: resolveIssues,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function resolveIssues() {
  const btns = document.querySelectorAll(
    '[data-qa-selector="resolve_discussion_button"]',
  );

  btns.forEach((btn) => btn.click());
  
}
