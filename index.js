console.log("This is my CDN testing.");
document.write("Hey this is my test CDN file here.");
document.write("Hey this is my test CDN file for chatbot app.");
const chatButtonEl = document.getElementById("chat-button");
const iframeDivEl = document.getElementById("iframe-chat-app");

let isIframeVisible = true;

chatButtonEl.addEventListener("click", () => {
  console.log("Chat button clicked");
  if (isIframeVisible) {
    iframeDivEl.style.display = "none";
  } else {
    iframeDivEl.style.display = "block";
  }
  isIframeVisible = !isIframeVisible;
});
