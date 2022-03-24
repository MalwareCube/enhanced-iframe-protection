//Random Variable to Identify Script
const r = (Math.random() + 1).toString(36).substring(2);
const r2 = (Math.random() + 1).toString(36).substring(2);
const rid = r + r2;


//On load, find all iframes, add styles
function iframeFinder() {
  //Fetch current domain
  let domain = new URL(document.URL).hostname;

  //If error / empty string, set to blank
  if (!domain) {
    domain = "localhost";
  }

  //Get domainAllow array, if exists, check if domain entry exists
  chrome.storage.local.get('domainAllow', function(domainAllowResult){
    let domainAllowResultP = domainAllowResult.domainAllow;

    if (!domainAllowResultP) {
      domainAllowResultP = [];
    }


  //If parent domain is NOT allow-listed
  if (!domainAllowResultP.includes(domain)) {
  
  //Get src allowlist array, if exists, check if entry exists
  chrome.storage.local.get('srcAllow', function(srcAllowResult){
    let srcAllowResultP = srcAllowResult.srcAllow;

    //If the result in localStorage doesn't exist, set it to empty array []
    if (!srcAllowResultP) {
      srcAllowResultP = [];
    }


    //document.queryselector WHERE IM AT NOW, LINE 50

    document.querySelectorAll("iframe").forEach((frame) => {
      //If the iframe actually has a src attribute set
      //AND if the iframe already doesn't have unique ID
      if (
            !srcAllowResultP.includes(frame.src) &&
            frame.src &&
            frame.src !== "about:blank" &&
            frame.src !== "javascript:undefined" &&
            !frame.classList.contains(rid)
          ) {
            //Give it unique ID
            frame.setAttribute("class", rid);

             //Create Warning Div
             let warning = document.createElement("div");


           //iFrame Styles
            frame.style.filter = "brightness(20%)";

            //Style Warning Div
            warning.style.fontFamily = "Arial, Helvetica, sans-serif";
            warning.style.fontSize = "14px";

            warning.style.color = "white";
            warning.style.backgroundColor = "rgb(206,53,40)";

            warning.style.width = "100%";
            warning.style.padding = "20px";
            warning.style.margin = "0px";
            warning.style.zIndex = "9999";

            warning.style.position = "fixed";
            warning.style.bottom = "0";
            warning.style.left = "0";

            warning.style.overflow = "none";
            warning.style.display = "block";

            //Create Heading and Paragraph and append them
            let warningHeading = document.createElement("h2");
            let warningText = document.createElement("p");
            let warningText2 = document.createElement("p");

            //Format URL (add elipses if too long)
            let warningURL;
            if (frame.src.length > 50) {
              warningURL = frame.src.substring(0, 50) + "...";
            } else {
              warningURL = frame.src;
            }

            //Create URL element
            let urlElement = document.createElement("span");
            urlElement.textContent = warningURL;
            urlElement.title = frame.src

            let warningAccept = document.createElement("button");
            let warningNever = document.createElement("button");

            warningHeading.textContent = "Warning: Potential Security Risk Ahead";
            warningText.textContent = "An iframe element is displaying content from the following URL: ";
            warningText2.textContent = "Please ensure you trust this URL before entering any sensitive information such as passwords, emails, or credit card details.";

            warningAccept.textContent = "Close Warning";
            warningNever.title = domain
            warningNever.textContent = "Never Show Warnings On This Site";

            //Style Heading H2
            warningHeading.style.fontFamily = "Arial, Helvetica, sans-serif";
            warningHeading.style.color = "white";

            warningHeading.style.fontSize = "18px";
            warningHeading.style.fontWeight = "normal";

            warningHeading.style.margin = "0px";
            warningHeading.style.marginBottom = "15px";
            warningHeading.style.padding = "0px";

            //Style Parageaph p
            warningText.style.fontFamily = "Arial, Helvetica, sans-serif";
            warningText.style.color = "white";

            warningText.style.fontSize = "14px";
            warningText.style.fontWeight = "normal";

            warningText.style.margin = "0px";
            warningText.style.marginRight = "5px";
            warningText.style.marginBottom = "15px";
            warningText.style.padding = "0px";

            warningText.style.display = "inline-block"; 

            //Style URLElement
            urlElement.style.fontFamily = "Arial, Helvetica, sans-serif";
            urlElement.style.fontWeight = "bold";
            urlElement.style.textDecoration = "underline";
            urlElement.style.color = "white";

            urlElement.style.fontSize = "14px";

            urlElement.style.margin = "0px";
            urlElement.style.marginBottom = "15px";
            urlElement.style.padding = "0px";

            urlElement.style.display = "inline-block";

            //Style Parageaph 2 p
            warningText2.style.fontFamily = "Arial, Helvetica, sans-serif";
            warningText2.style.color = "white";

            warningText2.style.fontSize = "14px";
            warningText2.style.fontWeight = "normal";

            warningText2.style.margin = "0px";
            warningText2.style.marginBottom = "15px";
            warningText2.style.padding = "0px";

            //Style Accept Button
            warningAccept.style.fontFamily = "Arial, Helvetica, sans-serif";
            warningAccept.style.color = "black";

            warningAccept.style.fontSize = "14px";
            warningAccept.style.fontWeight = "normal";

            warningAccept.style.background = "none";
            warningAccept.style.backgroundColor = "white";
            warningAccept.style.border = "none";
            warningAccept.style.borderRadius = "5px";

            warningAccept.style.marginTop = "2px";
            warningAccept.style.padding = "10px";
            warningAccept.style.display = "inline-block";
            warningAccept.style.cursor = "pointer";

            warningAccept.style.marginRight = "10px";

            //Style Never Button
            warningNever.style.fontFamily = "Arial, Helvetica, sans-serif";
            warningNever.style.color = "white";

            warningNever.style.fontSize = "14px";
            warningNever.style.fontWeight = "normal";

            warningNever.style.background = "none";
            warningNever.style.border = "solid 1px white";
            warningNever.style.borderRadius = "5px";

            warningNever.style.marginTop = "2px";
            warningNever.style.padding = "10px";
            warningNever.style.display = "inline-block";
            warningNever.style.cursor = "pointer";

            //Append Heading and Paragraph to warning element
            warning.appendChild(warningHeading);
            warning.appendChild(warningText);
            warning.appendChild(urlElement)
            warning.appendChild(warningText2)

            warning.appendChild(warningAccept);
            warning.appendChild(warningNever);

            //Append warning to document
            document.body.appendChild(warning);


           //Event listener for Accept warning button
            warningAccept.addEventListener("click", (e) => {
              e.preventDefault();

              //Remove warning
              warning.remove();

              //iFrame Styles
              frame.style.filter = "brightness(100%)";
              frame.style.filter = "initial";

              //Add src URL to whitelist array
              if (srcAllowResultP) {
                //Check if entry for frame src exists
                if (!srcAllowResultP.includes(frame.src)) {
                  ddcopy = srcAllowResultP;
                  ddcopy.push(frame.src);
                  chrome.storage.local.set({ srcAllow: ddcopy });
                }
              } else {
                //Create array and push frame src to it
                let srcAllowArray = [frame.src];
                chrome.storage.local.set({ srcAllow: srcAllowArray });
              }
            });

            //Event listener for Never Warning button
            warningNever.addEventListener("click", (e) => {
              e.preventDefault();

              //Remove warning
              warning.remove();

              //iFrame Styles
              frame.style.filter = "brightness(100%)";
              frame.style.filter = "initial";

              //Add parent URL to domainAllow array
              if (domainAllowResultP) {
                //Check if entry for frame src exists
                if (!domainAllowResultP.includes(domain)) {
                  ddcopy = domainAllowResultP;
                  ddcopy.push(domain);
                  chrome.storage.local.set({ domainAllow: ddcopy });
                }
              } else {
                //Create array and push frame src to it
                let domainAllowArray = [domain];
                chrome.storage.local.set({ domainAllow: domainAllowArray });
              }
            });

            } //end of if !srcAllowResultP.incluides(frame.src)


    }); // end of forEach frame

  })// end of srcAllow check
  } //end of if !domainAllowsP.includes(domain)


  }); // end of domainAllow check
}

//Call this whenever DOM updates
iframeFinder();

//Mutation Observer
////////////////////////////////////////////////
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
  iframeFinder();
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true,
});
///////////////////////////////////////////////
