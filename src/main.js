chrome.storage.sync.get("filterValue", ({filterValue})=>{
  document.body.style.filter = filterValue || "none";
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
  if(message.action=="applyFilter"){
    document.body.style.filter=message.filter;
  }
})