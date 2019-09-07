$(document).ready(function(){
     
	 //generated client id
     var clientId = "349805278143-c2vi2ruhvv8032fq9558sr111ohbn6pp.apps.googleusercontent.com";
	 
	 //url set for the redirection in google console
     var redirect_uri = "http://localhost:8081/GDrive/upload.html";
	 
	 //invoking url for google drive Resource Server
     var scope = "https://www.googleapis.com/auth/drive";
	 
	 //url which our application hosted
     var url = "";


	 //method created to invoke the authentication
     $("#login").click(function(){

        signInToGoogleAccount(clientId,redirect_uri,scope,url);

     });

	 //method implementation of authentication using OAuth
     function signInToGoogleAccount(clientId,redirect_uri,scope,url){
      
       //OAuth url for the authentication and verification
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";
        window.location = url;

     }

});