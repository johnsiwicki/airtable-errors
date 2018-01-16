 window.onerror = function(msg, url, linenumber) {

     // convert to string
     var nUrl = url.toString();
     var nLine = linenumber.toString();

     //airtable url get at https://airtable.com/api
     var airurl = "";

     //send data to airtable this is my airtable linkg
     var airtable_write_endpoint = airurl;
     axios.post(airtable_write_endpoint, {
         "fields": {
             "Error message": msg,
             "URL": nUrl,
             "Line": nLine
         }
     }).then(function(response) {
         console.log(response);
     }).catch(function(error) {
         console.log(error);
     });
     return true;
 }
