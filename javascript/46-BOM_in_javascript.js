console.log("Screen Color Depth: " + screen.colorDepth);
console.log("Screen Height: " + screen.height);
console.log("Available Screen Width: " + screen.availWidth);
console.log("Available Screen Height: " + screen.availHeight);
console.log("Screen Color Depth: " + screen.colorDepth);
function goBack() {
    //call this function to go to the previous page
    window.history.back()
}
function goForward() {
    //call this function to go to the next page
    window.history.forward()
}
console.log(window.location);
console.log(window.location.protocol);
if(window.location.protocol === "https:"){
	console.log("The website is secured by SSL");
}