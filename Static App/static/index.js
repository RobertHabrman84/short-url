//from parameters query full URL
var shorturl = window.location.pathname.substr(1);
var baseURL = "https://apiurlshort.azure-api.net/urlshortfunctionapp/GetFullURL";
var requestURL = baseURL.concat(shorturl);

var request = new XMLHttpRequest()
request.open('GET',requestURL,false)
//define request header
request.setRequestHeader("Ocp-Apim-Subscription-Key","b799e55b9de7413dbb7b0841680e49ec")
request.send();

if(request.responseText.length > 0){
    window.location=request.responseText
}
else if(shorturl.length < 1){
    //if there is no parameter, route to homepage
    window.location="/home"
}
else{
    //if there is no response from url, meaning not found
    window.location="/notfound"
}
