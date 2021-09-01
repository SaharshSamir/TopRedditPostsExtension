chrome.contextMenus.create({
    "title": "View Top Post From This Subreddit",
    "contexts": ["selection"],
    "onclick": openTab()
})

function openTab() {
    return function (info, tab) {
        let text = info.selectionText;
        // let redditLink = "https://www.reddit.com/" + format(text) + "/top/?t=all"
        let redditLink = `https://www.reddit.com/${format(text)}/top/?t=all`;
        chrome.tabs.create({ index: tab.index + 1, url: redditLink, selected: true });

    }
};

function format(subname) {
    if (subname[0] == "r" && subname[1] == "/")
    {
        return subname;
    } else
    {
        return `r/${subname}`;
    }
}