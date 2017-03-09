
function readDistributorText(){
  var rawFileDistributor = new XMLHttpRequest();
    rawFileDistributor.open("GET", "/tmp/release/distributor.txt", true);
        rawFileDistributor.onreadystatechange = function (){
          if(rawFileDistributor.readyState === 4){
              var allText = rawFileDistributor.responseText;
              document.getElementById("Distributor").innerHTML = allText;
          }
        }
    rawFileDistributor.send();
}

function readDescriptionText(){
  var rawFileDescription = new XMLHttpRequest();
    rawFileDescription.open("GET", "/tmp/release/description.txt", true);
        rawFileDescription.onreadystatechange = function (){
          if(rawFileDescription.readyState === 4){
              var allText = rawFileDescription.responseText;
              document.getElementById("Description").innerHTML = allText;
          }
        }
    rawFileDescription.send();
}

function readReleaseText(){
  var rawFileRelease = new XMLHttpRequest();
    rawFileRelease.open("GET", "/tmp/release/release.txt", true);
        rawFileRelease.onreadystatechange = function (){
          if(rawFileRelease.readyState === 4){
              var allText = rawFileRelease.responseText;
              document.getElementById("Release").innerHTML = allText;
          }
        }
    rawFileRelease.send();
}

function readCodenameText(){
  var rawFileCodename = new XMLHttpRequest();
    rawFileCodename.open("GET", "/tmp/release/codename.txt", true);
        rawFileCodename.onreadystatechange = function (){
          if(rawFileCodename.readyState === 4){
              var allText = rawFileCodename.responseText;
              document.getElementById("Codename").innerHTML = allText;
          }
        }
    rawFileCodename.send();
}

function readKernelText(){
  var rawFileKernel = new XMLHttpRequest();
    rawFileKernel.open("GET", "/tmp/release/kernel.txt", true);
        rawFileKernel.onreadystatechange = function (){
          if(rawFileKernel.readyState === 4){
              var allText = rawFileKernel.responseText;
              document.getElementById("Kernel").innerHTML = allText;
          }
        }
    rawFileKernel.send();
}

$(document).ready(function() {
	readDistributorText();
	readDescriptionText();
	readReleaseText();
	readCodenameText();
	readKernelText();
});
