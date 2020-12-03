



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
    // ldFeatPicDelay();
    loadCopyRight();
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

function ldFeatPicDelay()
{
    
    // var cycleImg1 = document.getElementById("cycleImg1");
    // var cycleImg2 = document.getElementById("cycleImg2");
    // var cycleImg3 = document.getElementById("cycleImg3");

    // var cycleLogo11 = document.getElementById("cycleLogo11");
    // var cycleLogo21 = document.getElementById("cycleLogo21");
    // var cycleLogo31 = document.getElementById("cycleLogo31");

    // var cycleLogo12 = document.getElementById("cycleLogo12");
    // var cycleLogo22 = document.getElementById("cycleLogo22");
    // var cycleLogo32 = document.getElementById("cycleLogo32");

    // var cycleLogo13 = document.getElementById("cycleLogo13");
    // var cycleLogo23 = document.getElementById("cycleLogo23");
    // var cycleLogo33 = document.getElementById("cycleLogo33");

    // var cycleLogo14 = document.getElementById("cycleLogo14");
    // var cycleLogo24 = document.getElementById("cycleLogo24");
    // var cycleLogo34 = document.getElementById("cycleLogo34");

    // var cycleLogo15 = document.getElementById("cycleLogo15");
    // var cycleLogo25 = document.getElementById("cycleLogo25");
    // var cycleLogo35 = document.getElementById("cycleLogo35");


    // var cycleLogo16 = document.getElementById("cycleLogo16");
    // var cycleLogo26 = document.getElementById("cycleLogo26");
    // var cycleLogo36 = document.getElementById("cycleLogo36");

    // var cycleLogo17 = document.getElementById("cycleLogo17");
    // var cycleLogo27 = document.getElementById("cycleLogo27");
    // var cycleLogo37 = document.getElementById("cycleLogo37");

    // var cycleLogo18 = document.getElementById("cycleLogo18");
    // var cycleLogo28 = document.getElementById("cycleLogo28");
    // var cycleLogo38 = document.getElementById("cycleLogo38");

    // var blogLogo11 = document.getElementById("blogLogo11");
    // var blogLogo12 = document.getElementById("blogLogo12");
    // var blogLogo13 = document.getElementById("blogLogo13");
    // var blogLogo14 = document.getElementById("blogLogo14");
    
    
    // var blogLogo21 = document.getElementById("blogLogo21");
    // var blogLogo22 = document.getElementById("blogLogo22");
    // var blogLogo23 = document.getElementById("blogLogo23");
    // var blogLogo24 = document.getElementById("blogLogo24");


    // var blogLogo31 = document.getElementById("blogLogo31");
    // var blogLogo32 = document.getElementById("blogLogo32");
    // var blogLogo33 = document.getElementById("blogLogo33");
    // var blogLogo34 = document.getElementById("blogLogo34");


    
   

    

    
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


//     var downloadingImageLogo1 = new Image();
//     downloadingImageLogo1.onload = function(){
//         cycleLogo11.src = this.src;
//         cycleLogo21.src = this.src;
//         cycleLogo31.src = this.src;  
//         //loading blog
//         blogLogo11.src = this.src;
//         blogLogo21.src = this.src;   
//         blogLogo31.src = this.src;
        
//     };
//     downloadingImageLogo1.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/1.jpg";

//     var downloadingImageLogo2 = new Image();
//     downloadingImageLogo2.onload = function(){
//         cycleLogo12.src = this.src;
//         cycleLogo22.src = this.src; 
//         cycleLogo32.src = this.src;
//         //loading blog
//         blogLogo12.src = this.src;
//         blogLogo22.src = this.src;   
//         blogLogo32.src = this.src;
          
//     };
//     downloadingImageLogo2.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/2.jpg";

//     var downloadingImageLogo3 = new Image();
//     downloadingImageLogo3.onload = function(){
//         cycleLogo13.src = this.src;
//         cycleLogo23.src = this.src; 
//         cycleLogo33.src = this.src;
//         //loading blog
//         blogLogo13.src = this.src;
//         blogLogo23.src = this.src;   
//         blogLogo33.src = this.src;
             
//     };
//     downloadingImageLogo3.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/3.jpg";

//     var downloadingImageLogo4 = new Image();
//     downloadingImageLogo4.onload = function(){
//         cycleLogo14.src = this.src;
//         cycleLogo24.src = this.src;  
//         cycleLogo34.src = this.src;
//          //loading blog
//          blogLogo14.src = this.src;
//          blogLogo24.src = this.src;   
//          blogLogo34.src = this.src;
         
//     };
//     downloadingImageLogo4.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/4.jpg";

//     var downloadingImageLogo5 = new Image();
//     downloadingImageLogo5.onload = function(){
//         cycleLogo15.src = this.src;
//         cycleLogo25.src = this.src;    
//         cycleLogo35.src = this.src; 
//     };
//     downloadingImageLogo5.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/5.jpg";

//     var downloadingImageLogo6 = new Image();
//     downloadingImageLogo6.onload = function(){
//         cycleLogo16.src = this.src; 
//         cycleLogo26.src = this.src;  
//         cycleLogo36.src = this.src;
//     };
//     downloadingImageLogo6.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/6.jpg";

//     var downloadingImageLogo7 = new Image();
//     downloadingImageLogo7.onload = function(){
//         cycleLogo17.src = this.src;   
//         cycleLogo27.src = this.src; 
//         cycleLogo37.src = this.src; 
//     };
//     downloadingImageLogo7.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/7.jpg";

//     var downloadingImageLogo8 = new Image();
//     downloadingImageLogo8.onload = function(){
//         cycleLogo18.src = this.src; 
//         cycleLogo28.src = this.src;  
//         cycleLogo38.src = this.src;
//     };
//     downloadingImageLogo8.src = "http://www.atendanssample.com.s3-website-us-west-2.amazonaws.com/img/customers/8.jpg";
// 
}

function scaleDown(element)
{
    // console.log("firing event",element);
    var popup1 = document.getElementById("popup1");
    var popup2 = document.getElementById("popup2");
    var popup3 = document.getElementById("popup3");
    var popup4 = document.getElementById("popup4");
    var popup5 = document.getElementById("popup5");
    var popup6 = document.getElementById("popup6");
    
    switch(element.id)
    {
        case "popup1":
                    //    console.log("popup1");
                       popup2.style.opacity = 0.25;
                       popup3.style.opacity = 0.25;
                       popup4.style.opacity = 0.25;
                       popup5.style.opacity = 0.25;
                       popup6.style.opacity = 0.25;
                       break;
        case "popup2":
                    //    console.log("popup2");
                       popup1.style.opacity = 0.25;
                       popup3.style.opacity = 0.25;
                       popup4.style.opacity = 0.25;
                       popup5.style.opacity = 0.25;
                       popup6.style.opacity = 0.25;
                       break; 
        case "popup3":
                    //    console.log("popup3");
                       popup1.style.opacity = 0.25;
                       popup2.style.opacity = 0.25;
                       popup4.style.opacity = 0.25;
                       popup5.style.opacity = 0.25;
                       popup6.style.opacity = 0.25;
                       break;
        case "popup4":
                    //    console.log("popup4");
                       popup1.style.opacity = 0.25;
                       popup2.style.opacity = 0.25;
                       popup3.style.opacity = 0.25;
                       popup5.style.opacity = 0.25;
                       popup6.style.opacity = 0.25;
                       break;
        case "popup5":
                    //    console.log("popup5");
                       popup1.style.opacity = 0.25;
                       popup2.style.opacity = 0.25;
                       popup3.style.opacity = 0.25;
                       popup4.style.opacity = 0.25;
                       popup6.style.opacity = 0.25;
                       break; 
        case "popup6":
                    //    console.log("popup6");
                       popup1.style.opacity = 0.25;
                       popup2.style.opacity = 0.25;
                       popup3.style.opacity = 0.25;
                       popup4.style.opacity = 0.25;
                       popup5.style.opacity = 0.25;
                       break;                                                           
    }
}

function scaleBack(element)
{
    // console.log("firing event",element);
    var popup1 = document.getElementById("popup1");
    var popup2 = document.getElementById("popup2");
    var popup3 = document.getElementById("popup3");
    var popup4 = document.getElementById("popup4");
    var popup5 = document.getElementById("popup5");
    var popup6 = document.getElementById("popup6");
    
    switch(element.id)
    {
        case "popup1":
                    //    console.log("popup1");
                       popup2.style.opacity = 1;
                       popup3.style.opacity = 1;
                       popup4.style.opacity = 1;
                       popup5.style.opacity = 1;
                       popup6.style.opacity = 1;
                       break;
        case "popup2":
                    //    console.log("popup2");
                       popup1.style.opacity = 1;
                       popup3.style.opacity = 1;
                       popup4.style.opacity = 1;
                       popup5.style.opacity = 1;
                       popup6.style.opacity = 1;
                       break;  
        case "popup3":
                    //    console.log("popup3");
                       popup1.style.opacity = 1;
                       popup2.style.opacity = 1;
                       popup4.style.opacity = 1;
                       popup5.style.opacity = 1;
                       popup6.style.opacity = 1;
                       break; 
                       
           case "popup4":
                       //    console.log("popup4");
                          popup1.style.opacity = 1;
                          popup2.style.opacity = 1;
                          popup3.style.opacity = 1;
                          popup5.style.opacity = 1;
                          popup6.style.opacity = 1;
                          break;
           case "popup5":
                       //    console.log("popup5");
                          popup1.style.opacity = 1;
                          popup2.style.opacity = 1;
                          popup3.style.opacity = 1;
                          popup4.style.opacity = 1;
                          popup6.style.opacity = 1;
                          break; 
           case "popup6":
                       //    console.log("popup6");
                          popup1.style.opacity = 1;
                          popup2.style.opacity = 1;
                          popup3.style.opacity = 1;
                          popup4.style.opacity = 1;
                          popup5.style.opacity = 1;
                          break;                   
    }
}
