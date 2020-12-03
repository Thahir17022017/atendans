

// function ipLookUp()
// {
//     $.ajax('http://ip-api.com/json').then(success,fail);
// }
// //callback function when the coutry lookup passed
// function success(response)
// {
//    var country = response.country;     
//    console.log('User\'s Country', response.country);
//    var priceSign1 = document.getElementById("notesign1");
//    console.log("price sign 1",priceSign1);
//    var priceValue1 = document.getElementById("notevalue1");
//    console.log("price value 1",priceValue1);
//    var priceSign2 = document.getElementById("notesign2");
//    console.log("price sign 2",priceSign2);
//    var priceValue2 = document.getElementById("notevalue2");
//    console.log("price value 2",priceValue2);
//    if(country==="India")
//    {
//             console.log("Country is India");
//             priceSign1.innerHTML = "\u20B9";
//             priceValue1.innerHTML = "500";
//             priceSign2.innerHTML = "\u20B9";
//             priceValue2.innerHTML = "750";
//    }
//    if(country==="United States")
//    {
//             console.log("Country is United States");
//             priceSign1.innerHTML = "$";
//             priceValue1.innerHTML = "25";
//             priceSign2.innerHTML = "$";
//             priceValue2.innerHTML = "50";
//    }

// }
// //callback function when the coutry lookup failed
// function fail(data, status)
// {
//     console.log('Request failed.  Returned status of',status);
// }
// ipLookUp();

function loadUsPrice()
{
    console.log("Us Price clicked");

    document.getElementById("yearlyText1").style.display="none";
    document.getElementById("yearlyText2").style.display="none";
    document.getElementById("yearlyText3").style.display="none";

    document.getElementById("monthText1").innerHTML = "/ Month";
    document.getElementById("monthText2").innerHTML = "/ Month";
    document.getElementById("monthText3").innerHTML = "/ Month";

    document.getElementById("indian1").style.display="none";
    document.getElementById("indian2").style.display="none";
    document.getElementById("cycleImg1").height=840;

    document.getElementById("studentInfo1").innerHTML="Below 100 Students";
    document.getElementById("studentInfo2").innerHTML="101 -200 Students";
    document.getElementById("studentInfo3").innerHTML="201 -300 Students";

    var dropDownDisplay = document.getElementById("countryBtn");
    dropDownDisplay.innerHTML = "United States";
    
    var priceSign1 = document.getElementById("notesign1");
    var priceSign2 = document.getElementById("notesign2");
    var priceSign3 = document.getElementById("notesign3");
    
    var priceValue1 = document.getElementById("notevalue1");
    var priceValue2 = document.getElementById("notevalue2");
    var priceValue3 = document.getElementById("notevalue3");
        
    priceSign1.innerHTML = "$";
    priceSign2.innerHTML = "$";
    priceSign3.innerHTML = "$";

    priceValue1.innerHTML = "60";
    priceValue2.innerHTML = "50";
    priceValue3.innerHTML = "40";

    
    
    

}

loadUsPrice();

function loadIndiaPrice()
{
    
    document.getElementById("yearlyText1").style.display="inline";
    document.getElementById("yearlyText2").style.display="inline";
    document.getElementById("yearlyText3").style.display="inline";

    var dropDownDisplay = document.getElementById("countryBtn");
    dropDownDisplay.innerHTML = "India";
    
    document.getElementById("indian1").style.display="inline";
    document.getElementById("indian2").style.display="inline";
    document.getElementById("cycleImg1").height=870;

    document.getElementById("studentInfo1").innerHTML="Below 500 Students";
    document.getElementById("studentInfo2").innerHTML="501 - 1000 Students";
    document.getElementById("studentInfo3").innerHTML="1001 - 2500 Students";


    var priceSign1 = document.getElementById("notesign1");
    var priceSign2 = document.getElementById("notesign2");
    var priceSign3 = document.getElementById("notesign3");
    
    var priceValue1 = document.getElementById("notevalue1");
    var priceValue2 = document.getElementById("notevalue2");
    var priceValue3 = document.getElementById("notevalue3");
    
    priceSign1.innerHTML = "\u20B9";
    priceSign2.innerHTML = "\u20B9";
    priceSign3.innerHTML = "\u20B9";

    priceValue1.innerHTML = "190";
    priceValue2.innerHTML = "170";
    priceValue3.innerHTML = "150";

    document.getElementById("monthText1").innerHTML = "/ Student";
    document.getElementById("monthText2").innerHTML = "/ Student";
    document.getElementById("monthText3").innerHTML = "/ Student";
    

}

function closeDropDown(){

    if($('#button1').is(':visible'))
    {
        // Code
        // console.log("from body");
        $('#navbarSupportedContent').removeClass('show');
        
   
    }
}




function loadFeaturePic()
{
    // setTimeout(ldFeatPicDelay,2000);
    ldFeatPicDelay();
    loadCopyRight();
   
}

function loadCopyRight()
{
    console.log("copyright is running");
    
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

function ldFeatPicDelay()
{
       



    var laptopImg1 = document.getElementById("laptopImg1");
    // var laptopImg2 = document.getElementById("laptopImg2");
    // var mobileImg1 = document.getElementById("mobileImg1");
    // var mobileImg2 = document.getElementById("mobileImg2");

    var downloadLapImage = new Image();
    downloadLapImage.onload = function(){
        laptopImg1.src = this.src;
        // laptopImg2.src = this.src;    
    };
    // downloadLapImage.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/Laptop1.jpg";
    downloadLapImage.src = "img/Laptop1.jpg";
    

    // var downloadMobImage = new Image();
    // downloadMobImage.onload = function(){
    //     mobileImg1.src = this.src; 
    //     mobileImg2.src = this.src;   
    // };
    // downloadMobImage.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/Mobile1.jpg";
    



    var image = document.getElementById("deskImg");
    var cycleImg1 = document.getElementById("cycleImg1");
    var cycleImg2 = document.getElementById("cycleImg2");
    var cycleImg3 = document.getElementById("cycleImg3");

    var cycleLogo11 = document.getElementById("cycleLogo11");
    var cycleLogo21 = document.getElementById("cycleLogo21");
    var cycleLogo31 = document.getElementById("cycleLogo31");

    var cycleLogo12 = document.getElementById("cycleLogo12");
    var cycleLogo22 = document.getElementById("cycleLogo22");
    var cycleLogo32 = document.getElementById("cycleLogo32");

    var cycleLogo13 = document.getElementById("cycleLogo13");
    var cycleLogo23 = document.getElementById("cycleLogo23");
    var cycleLogo33 = document.getElementById("cycleLogo33");

    var cycleLogo14 = document.getElementById("cycleLogo14");
    var cycleLogo24 = document.getElementById("cycleLogo24");
    var cycleLogo34 = document.getElementById("cycleLogo34");

    var cycleLogo15 = document.getElementById("cycleLogo15");
    var cycleLogo25 = document.getElementById("cycleLogo25");
    var cycleLogo35 = document.getElementById("cycleLogo35");


    var cycleLogo16 = document.getElementById("cycleLogo16");
    var cycleLogo26 = document.getElementById("cycleLogo26");
    var cycleLogo36 = document.getElementById("cycleLogo36");

    var cycleLogo17 = document.getElementById("cycleLogo17");
    var cycleLogo27 = document.getElementById("cycleLogo27");
    var cycleLogo37 = document.getElementById("cycleLogo37");

    var cycleLogo18 = document.getElementById("cycleLogo18");
    var cycleLogo28 = document.getElementById("cycleLogo28");
    var cycleLogo38 = document.getElementById("cycleLogo38");

    var blogLogo11 = document.getElementById("blogLogo11");
    var blogLogo12 = document.getElementById("blogLogo12");
    var blogLogo13 = document.getElementById("blogLogo13");
    var blogLogo14 = document.getElementById("blogLogo14");
    
    
    var blogLogo21 = document.getElementById("blogLogo21");
    var blogLogo22 = document.getElementById("blogLogo22");
    var blogLogo23 = document.getElementById("blogLogo23");
    var blogLogo24 = document.getElementById("blogLogo24");


    var blogLogo31 = document.getElementById("blogLogo31");
    var blogLogo32 = document.getElementById("blogLogo32");
    var blogLogo33 = document.getElementById("blogLogo33");
    var blogLogo34 = document.getElementById("blogLogo34");


    
   

    var downloadingImage = new Image();
    downloadingImage.onload = function(){
    image.src = this.src;   
    };
    // downloadingImage.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/Desk.png";
    downloadingImage.src = "img/Desk.png";

    var downloadingImage1 = new Image();
    downloadingImage1.onload = function(){
        cycleImg1.src = this.src;   
    };
    // downloadingImage1.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/mac2.jpg";
    downloadingImage1.src = "img/mac2.jpg";


    // var downloadingImage2 = new Image();
    // downloadingImage2.onload = function(){
    //     cycleImg2.src = this.src;   
    // };
    // downloadingImage2.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/people2.jpg";


    // var downloadingImage3 = new Image();
    // downloadingImage3.onload = function(){
    //     cycleImg3.src = this.src;   
    // };
    // downloadingImage3.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/mac2.jpg";

    
    // //download image logos

    // var downloadingImageLogo1 = new Image();
    // downloadingImageLogo1.onload = function(){
    //     cycleLogo11.src = this.src;
    //     cycleLogo21.src = this.src;
    //     cycleLogo31.src = this.src;  
    //     //loading blog
    //     blogLogo11.src = this.src;
    //     blogLogo21.src = this.src;   
    //     blogLogo31.src = this.src;

    //     cycleLogo12.src = this.src;
    //     cycleLogo22.src = this.src; 
    //     cycleLogo32.src = this.src;
    //     //loading blog
    //     blogLogo12.src = this.src;
    //     blogLogo22.src = this.src;   
    //     blogLogo32.src = this.src;

    //     cycleLogo13.src = this.src;
    //     cycleLogo23.src = this.src; 
    //     cycleLogo33.src = this.src;
    //     //loading blog
    //     blogLogo13.src = this.src;
    //     blogLogo23.src = this.src;   
    //     blogLogo33.src = this.src;

    //     cycleLogo14.src = this.src;
    //     cycleLogo24.src = this.src;  
    //     cycleLogo34.src = this.src;
    //      //loading blog
    //      blogLogo14.src = this.src;
    //      blogLogo24.src = this.src;   
    //      blogLogo34.src = this.src;

    //      cycleLogo15.src = this.src;
    //      cycleLogo25.src = this.src;    
    //      cycleLogo35.src = this.src; 

    //      cycleLogo16.src = this.src; 
    //      cycleLogo26.src = this.src;  
    //      cycleLogo36.src = this.src;

    //      cycleLogo17.src = this.src;   
    //      cycleLogo27.src = this.src; 
    //      cycleLogo37.src = this.src; 
        
    //      cycleLogo18.src = this.src; 
    //      cycleLogo28.src = this.src;  
    //      cycleLogo38.src = this.src;
    // };
    // downloadingImageLogo1.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/download.png";


    // var downloadingImageLogo1 = new Image();
    // downloadingImageLogo1.onload = function(){
    //     cycleLogo11.src = this.src;
    //     cycleLogo21.src = this.src;
    //     cycleLogo31.src = this.src;  
    //     //loading blog
    //     blogLogo11.src = this.src;
    //     blogLogo21.src = this.src;   
    //     blogLogo31.src = this.src;
        
    // };
    // downloadingImageLogo1.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/1.jpg";

    // var downloadingImageLogo2 = new Image();
    // downloadingImageLogo2.onload = function(){
    //     cycleLogo12.src = this.src;
    //     cycleLogo22.src = this.src; 
    //     cycleLogo32.src = this.src;
    //     //loading blog
    //     blogLogo12.src = this.src;
    //     blogLogo22.src = this.src;   
    //     blogLogo32.src = this.src;
          
    // };
    // downloadingImageLogo2.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/2.jpg";

    // var downloadingImageLogo3 = new Image();
    // downloadingImageLogo3.onload = function(){
    //     cycleLogo13.src = this.src;
    //     cycleLogo23.src = this.src; 
    //     cycleLogo33.src = this.src;
    //     //loading blog
    //     blogLogo13.src = this.src;
    //     blogLogo23.src = this.src;   
    //     blogLogo33.src = this.src;
             
    // };
    // downloadingImageLogo3.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/3.jpg";

    // var downloadingImageLogo4 = new Image();
    // downloadingImageLogo4.onload = function(){
    //     cycleLogo14.src = this.src;
    //     cycleLogo24.src = this.src;  
    //     cycleLogo34.src = this.src;
    //      //loading blog
    //      blogLogo14.src = this.src;
    //      blogLogo24.src = this.src;   
    //      blogLogo34.src = this.src;
         
    // };
    // downloadingImageLogo4.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/4.jpg";

    // var downloadingImageLogo5 = new Image();
    // downloadingImageLogo5.onload = function(){
    //     cycleLogo15.src = this.src;
    //     cycleLogo25.src = this.src;    
    //     cycleLogo35.src = this.src; 
    // };
    // downloadingImageLogo5.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/5.jpg";

    // var downloadingImageLogo6 = new Image();
    // downloadingImageLogo6.onload = function(){
    //     cycleLogo16.src = this.src; 
    //     cycleLogo26.src = this.src;  
    //     cycleLogo36.src = this.src;
    // };
    // downloadingImageLogo6.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/6.jpg";

    // var downloadingImageLogo7 = new Image();
    // downloadingImageLogo7.onload = function(){
    //     cycleLogo17.src = this.src;   
    //     cycleLogo27.src = this.src; 
    //     cycleLogo37.src = this.src; 
    // };
    // downloadingImageLogo7.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/7.jpg";

    // var downloadingImageLogo8 = new Image();
    // downloadingImageLogo8.onload = function(){
    //     cycleLogo18.src = this.src; 
    //     cycleLogo28.src = this.src;  
    //     cycleLogo38.src = this.src;
    // };
    // downloadingImageLogo8.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/8.jpg";
}

// function storeLogin()
// {
//     localStorage.setItem("login", "true");
    
// }

// function storeFalseLogin()
// {
//     localStorage.setItem("login", "false");
    
// }

