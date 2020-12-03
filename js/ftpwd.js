function openTabs(evt, viewName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(viewName).style.display = "block";
    evt.currentTarget.className += " active";
}
function selectDefaultTab(name)
{
    document.getElementById(name).click();
}


function loadImage()
{
    loadCopyRight();
    var downloadPeopleImage = new Image();
    downloadPeopleImage.onload = function(){
        loginImg.src = this.src;
     
    };
    // downloadPeopleImage.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/chalkboard.jpg";
    downloadPeopleImage.src = "img/chalkboard.jpg";
   
}

function loadCopyRight()
{
        
    var d = new Date();
    var currFullYear = d.getFullYear().toString();
    var currCentury =  currFullYear.substr(0,2);
    var currYear =  currFullYear.substr(2,4);
    
    var copyRight = ((document.getElementById("copyRight").innerText).split("-"));
    var copyRightYear = copyRight[1].trim();
    var copyRightFYear = copyRight[0].trim();
    var copyRightCentury = copyRightFYear.substring(2,4);
    
    if(currYear>copyRightYear || currCentury>copyRightCentury)
    {
        document.getElementById("copyRight").innerText = (currFullYear-1)+" - "+currYear;
    }
    
}

function closeDropDown(){

    if($('#button1').is(':visible'))
    {
        // Code
        // console.log("from body");
        $('#navbarSupportedContent').removeClass('show');
        
   
    }
}

$(document).ready(function() {

    $('input').blur(function() {
  
      // check if the input has any value (if we've typed into it)
      if ($(this).val())
        $(this).addClass('used');
      else
        $(this).removeClass('used');
    });
  
  });



