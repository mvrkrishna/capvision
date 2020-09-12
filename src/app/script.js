function myfn() {  
  const scriptURL = "https://script.google.com/macros/s/AKfycbxUcWGpQwulnAxrv0Nioba_7JJwmun1MtpZrOcPZ_xShIh5gGKX/exec"
 // const form = document.forms['submit-to-google-sheet']
//  form.addEventListener('submit', e => {
//    e.preventDefault()	
    fetch(scriptURL, { method: 'POST', body: "www.xyz.abc"})
  })
  setInterval(function(){ d=new Date();console.log(d.getTime()); }, 5000000);
   var i = 1; 
  var j = 2;
  var z = i + j;
  alert (z);
 }
