function sendFilter(filter){
  console.log(`sendFilter: ${filter}`);
  chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
    if(tabs.length==0){
      console.log("There is no tabs.");
      return;
    }
    chrome.tabs.sendMessage(tabs[0].id, {action:"applyFilter", filter:filter});
  })
}

document.getElementById("pickBrightness").addEventListener("click", ()=>{
  sendFilter("saturate(0%)");
})

document.getElementById("invert").addEventListener("click", ()=>{
  sendFilter("invert(100%)");
})

document.getElementById("sepia").addEventListener("click", ()=>{
  sendFilter("sepia(100%)");
})

document.getElementById("reset").addEventListener("click", ()=>{
  sendFilter("none");
})