console.log('background here')
console.log("Background running");
const button = document.querySelector("#answer")
chrome.browserAction.onClick.addListener('onclick');
function IconClicked(tab)
{
	let msg = {
		txt : "Hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}

// {
//     "manifest_version": 3,
//     "name": "The Office Quizzer",
//     "description": "Base Level Extension",
//     "version": "2",
//     "action": {
//       "default_popup": "office.html"
//     },
//       "content_scripts": [{
//       "matches": ["<all_urls>"],
//       "all_frames": true,
//       "js":      ["src/contentScript.js"]
//     }],
//     "background" : {"scripts" : ["src/background.js"]},
//       "browser_action" : {
//       }

//   }