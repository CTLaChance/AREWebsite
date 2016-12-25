/*
For some reason, global variables can't be accessed inside the function. For the moment, I'm adding each of these to the show and hide functions.

var testimonialModal = document.getElementById("testimonialModal");
var copyrightModal = document.getElementById("copyrightModal");
var purchaseModal = document.getElementById("purchaseModal");
var contactModal = document.getElementById("contactModal");
var aboutModal = document.getElementById("aboutModal");
*/

function showAboutModal(){
    var testimonialModal = document.getElementById("testimonialModal");
    var copyrightModal = document.getElementById("copyrightModal");
    var purchaseModal = document.getElementById("purchaseModal");
    var contactModal = document.getElementById("contactModal");
    var aboutModal = document.getElementById("aboutModal");
    
    aboutModal.style.visibility = "visible";
    
    if(contactModal.style.opacity >= "1"){
        hideContactModal();
        contactModal.style.visibility = "hidden";
    }
    
    if(copyrightModal.style.opacity >= "1"){
        hideCopyrightModal();
        copyrightModal.style.visibility = "hidden";
    }
    
    if(testimonialModal.style.opacity >= "1"){
        hideTestimonialModal();
        testimonialModal.style.visibility = "hidden";
    }
    
    if(purchaseModal.style.opacity >= "1"){
        hidePurchaseModal();
        purchaseModal.style.visibility = "hidden";
    }
    
    var opacity = 0;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (aboutModal.style.opacity >= "1"){
            clearInterval(interval);
        }
        else{
            opacity += .015;
            aboutModal.style.opacity = opacity;
        }
    } 
}

function hideAboutModal(){
    var aboutModal = document.getElementById("aboutModal");
    var opacity = 1;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (aboutModal.style.opacity <= "0"){
            clearInterval(interval);
            aboutModal.style.visibility = "hidden";
        }
        else{
            opacity -= .015;
            aboutModal.style.opacity = opacity;
        }
    } 
}


function showContactModal(){
    var testimonialModal = document.getElementById("testimonialModal");
    var copyrightModal = document.getElementById("copyrightModal");
    var purchaseModal = document.getElementById("purchaseModal");
    var contactModal = document.getElementById("contactModal");
    var aboutModal = document.getElementById("aboutModal");
    
    if(aboutModal.style.opacity >= "1"){
        hideAboutModal();
        aboutModal.style.visibility = "hidden";
    }
    
    if(copyrightModal.style.opacity >= "1"){
        hideCopyrightModal();
        copyrightModal.style.visibility = "hidden";
    }
    
    if(testimonialModal.style.opacity >= "1"){
        hideTestimonialModal();
        testimonialModal.style.visibility = "hidden";
    }
    
    if(purchaseModal.style.opacity >= "1"){
        hidePurchaseModal();
        purchaseModal.style.visibility = "hidden";
    }
    
    contactModal.style.visibility = "visible";
    var opacity = 0;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (contactModal.style.opacity >= "1"){
            clearInterval(interval);
        }
        else{
            opacity += .015;
            contactModal.style.opacity = opacity;
        }
    } 
}

function hideContactModal(){
    var contactModal = document.getElementById("contactModal");
    var opacity = 1;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (contactModal.style.opacity <= "0"){
            contactModal.style.visibility = "hidden";
            clearInterval(interval);
        }
        else{
            opacity -= .015;
            contactModal.style.opacity = opacity;
        }
    } 
}


function showCopyrightModal(){
    var testimonialModal = document.getElementById("testimonialModal");
    var copyrightModal = document.getElementById("copyrightModal");
    var purchaseModal = document.getElementById("purchaseModal");
    var contactModal = document.getElementById("contactModal");
    var aboutModal = document.getElementById("aboutModal");
    
    copyrightModal.style.visibility = "visible";
    
    if(aboutModal.style.opacity >= "1"){
        hideAboutModal();
        aboutModal.style.visibility = "hidden";
    }
    
    if(contactModal.style.opacity >= "1"){
        hideContactModal();
        contactModal.style.visibility = "hidden";
    }
    
    if(testimonialModal.style.opacity >= "1"){
        hideTestimonialModal();
        testimonialModal.style.visibility = "hidden";
    }
    
    if(purchaseModal.style.opacity >= "1"){
        hidePurchaseModal();
        purchaseModal.style.visibility = "hidden";
    }
    
    var opacity = 0;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (copyrightModal.style.opacity >= "1"){
            clearInterval(interval);
        }
        else{
            opacity += .015;
            copyrightModal.style.opacity = opacity;
        }
    } 
}

function hideCopyrightModal(){
    var copyrightModal = document.getElementById("copyrightModal");
    var opacity = 1;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (copyrightModal.style.opacity <= "0"){
            clearInterval(interval);
            copyrightModal.style.visibility = "hidden";
        }
        else{
            opacity -= .015;
            copyrightModal.style.opacity = opacity;
        }
    } 
}


function showTestimonialModal(){
    var testimonialModal = document.getElementById("testimonialModal");
    var copyrightModal = document.getElementById("copyrightModal");
    var purchaseModal = document.getElementById("purchaseModal");
    var contactModal = document.getElementById("contactModal");
    var aboutModal = document.getElementById("aboutModal");
    
    testimonialModal.style.visibility = "visible";
    
    if(aboutModal.style.opacity >= "1"){
        hideAboutModal();
        aboutModal.style.visibility = "hidden";
    }
    
    if(contactModal.style.opacity >= "1"){
        hideContactModal();
        contactModal.style.visibility = "hidden";
    }
    
    if(copyrightModal.style.opacity >= "1"){
        hideCopyrightModal();
        copyrightModal.style.visibility = "hidden";
    }
    
    if(purchaseModal.style.opacity >= "1"){
        hidePurchaseModal();
        purchaseModal.style.visibility = "hidden";
    }
    
    var opacity = 0;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (testimonialModal.style.opacity >= "1"){
            clearInterval(interval);
        }
        else{
            opacity += .015;
            testimonialModal.style.opacity = opacity;
        }
    } 
}

function hideTestimonialModal(){
    var testimonialModal = document.getElementById("testimonialModal");
    var opacity = 1;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (testimonialModal.style.opacity <= "0"){
            clearInterval(interval);
            testimonialModal.style.visibility = "hidden";
        }
        else{
            opacity -= .015;
            testimonialModal.style.opacity = opacity;
        }
    } 
}


function showPurchaseModal(book)
{
    var purchaseHeader = document.getElementById("purchaseHeader");
    var testimonialModal = document.getElementById("testimonialModal");
    var copyrightModal = document.getElementById("copyrightModal");
    var purchaseModal = document.getElementById("purchaseModal");
    var contactModal = document.getElementById("contactModal");
    var aboutModal = document.getElementById("aboutModal");
    
    if(contactModal.style.opacity >= "1"){
        hideContactModal();
        contactModal.style.visibility = "hidden";
    }
    
    if(aboutModal.style.opacity >= "1"){
        hideAboutModal();
        aboutModal.style.visibility = "hidden";
    }
    
    if(testimonialModal.style.opacity >= "1"){
        hideTestimonialModal();
        testimonialModal.style.visibility = "hidden";
    }
    
    if(copyrightModal.style.opacity >= "1"){
        hideCopyrightModal();
        copyrightModal.style.visibility = "hidden";
    }
    
    switch(book){
        case "3rdGrade":
            purchaseHeader.innerHTML = "Third Grade";
            break;
        case "4thGrade":
            purchaseHeader.innerHTML = "Fourth Grade";
            break;
        case "5thGrade":
            purchaseHeader.innerHTML = "Fifth Grade";
            break;
        case "6thGrade":
            purchaseHeader.innerHTML = "Sixth Grade";
            break;
        case "7thGrade":
            purchaseHeader.innerHTML = "Seventh Grade";
            break;
        case "PreAlgebra":
            purchaseHeader.innerHTML = "Pre-Algebra";
            break;
        case "Algebra1":
            purchaseHeader.innerHTML = "Algebra 1";
            break;
        case "Geometry":
            purchaseHeader.innerHTML = "Geometry";
            break;
        case "Algebra2":
            purchaseHeader.innerHTML = "Algebra 2";
            break;
        case "3rdGradeSpanish":
            purchaseHeader.innerHTML = "Third Grade Spanish";
            break;
    }
    purchaseHeader.style.color = "white";
    purchaseModal.style.visibility = "visible";
    var opacity = 0;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (purchaseModal.style.opacity >= "1"){
            clearInterval(interval);
        }
        else{
            opacity += .015;
            purchaseModal.style.opacity = opacity;
        }
    } 
}

function hidePurchaseModal()
{
    var purchaseModal = document.getElementById("purchaseModal");
    var opacity = 1;
    var interval = setInterval(animationframe, 3);
    function animationframe(){
        if (purchaseModal.style.opacity <= "0"){
            clearInterval(interval);
            purchaseModal.style.visibility = "hidden";
        }
        else{
            opacity -= .015;
            purchaseModal.style.opacity = opacity;
        }
    } 
}


function showPurchasePage()
{
    var purchaseHeader = document.getElementById("purchaseHeader");
    switch(purchaseHeader.innerHTML){
        case "Third Grade":
            window.open("https://www.createspace.com/5266215");
            break;
        case "Fourth Grade":
            window.open("https://www.createspace.com/4592664");
            break;
        case "Fifth Grade":
            window.open("https://www.createspace.com/4592624");
            break;
        case "Sixth Grade":
            window.open("https://www.createspace.com/3772454");
            break;
        case "Seventh Grade":
            window.open("https://www.createspace.com/3772674");
            break;
        case "Pre-Algebra":
            window.open("https://www.createspace.com/3777315");
            break;
        case "Algebra 1":
            window.open("https://www.createspace.com/3619230");
            break;
        case "Geometry":
            window.open("https://www.createspace.com/4280117");
            break;
        case "Algebra 2":
            window.open("https://www.createspace.com/4280105");
            break;
        case "Third Grade Spanish":
            //window.open("https://www.createspace.com/6295527");
            purchaseHeader.innerHTML = "This book is not yet available.";
            purchaseHeader.style.color = "#FF0000";
            break;
        }
}

function showSamplePage()
{
    var purchaseHeader = document.getElementById("purchaseHeader");
    switch(purchaseHeader.innerHTML){
        case "Third Grade":
            window.open("/media/ThirdGradeSample.jpg");
            break;
        case "Fourth Grade":
            window.open("/media/FourthGradeSample.jpg");
            break;
        case "Fifth Grade":
            window.open("/media/FifthGradeSample.jpg");
            break;
        case "Sixth Grade":
            window.open("/media/SixthGradeSample.jpg");
            break;
        case "Seventh Grade":
            window.open("/media/SeventhGradeSample.jpg");
            break;
        case "Pre-Algebra":
            window.open("/media/Pre-AlgebraSample.jpg");
            break;
        case "Algebra 1":
            window.open("/media/Algebra1Sample.jpg");
            break;
        case "Geometry":
            window.open("/media/GeometrySample.jpg");
            break;
        case "Algebra 2":
            window.open("/media/Algebra2Sample.jpg");
            break;
        case "Third Grade Spanish":
            window.open("/media/ThirdGradeSpanishSample.jpg");
            break;
    }
}