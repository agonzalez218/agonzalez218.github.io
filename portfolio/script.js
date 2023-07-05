function filterSelection(choice) {
  var boxes, i;
  boxes = document.getElementsByClassName("filterDiv");
  if (choice == "all"){
    choice = "";
  }
  highlightBttn();
  for (i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("show");
    if (boxes[i].className.indexOf(choice) > -1){
      boxes[i].classList.add("show");
    }
  }
}

function highlightBttn(){
  var btnContainer = document.getElementById("btnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].classList.remove("active");
      this.classList.add("active");
    });
  }
}

function fillInfoColumn(chosenProject){
  var infoTitle = document.getElementById("infoTitle");
  var infoImg = document.getElementById("infoImg");
  var infoText = document.getElementById("infoText");
  var infoLink = document.getElementById('infoLink');
  var infoTitleMb = document.getElementById("infoTitleMobile");
  var infoImgMb = document.getElementById("infoImgMobile");
  var infoTextMb = document.getElementById("infoTextMobile");
  var infoLinkMb = document.getElementById('infoLinkMobile');
  document.getElementById('lrg-sketch').style.visibility='collapse';
      document.getElementById('lrg-sketchMb').style.visibility='collapse';
      infoImg.style.visibility="visible";
      infoImgMb.style.visibility="visible";
  switch(chosenProject){
    case "WeatherAPI":
      infoTitle.innerText = "Weather API in React";
      infoImg.src = "project_images/WeatherAPIReact.png";
      infoText.innerText = "A web application created in React that utilises two API's. One is google maps to determine a locaiton's latitude and logitude and the other API is Open-Meteo which gives weather information based on the given location.";
      infoLink.href = "https://agonzalez218.github.io/WeatherAPIReact/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "CryptologyForm":
      infoTitle.innerText = "Cryptology Form";
      infoImg.src = "project_images/CryptologyForm.png";
      infoText.innerText = "This project is a tool that gives a user access to multiple encryption methods. The user may enter a message, or link to a file with the message, then choose an encryption method. Once chosen, they simply set the parameters or accept the defaults and press encrypt. This will create an encrypted file from the message in the specified filename. The user may move it to another directory or decode it using the same parameters.";
      infoLink.href = "https://github.com/agonzalez218/PythonCryptology/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "JavaInteractive":
      infoTitle.innerText = "Java Interactive Structures";
      infoImg.src = "project_images/JavaInteractiveStruct.gif";
      infoText.innerText = "This project displays multiple data structrues and sort algorithms and allows a user to interact with them to better understand how they work.";
      infoLink.href = "https://github.com/agonzalez218/JavaInteractiveStructures/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "CDataStructures":
      infoTitle.innerText = "Data Structures in C";
      infoImg.src = "project_images/CDataStructures.png";
      infoText.innerText = "This program contains the necessary files and elements to implement and demonstrate a few data structures within the C language.";
      infoLink.href = "https://github.com/agonzalez218/DataStructuresInC/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
      case "TabClipboard":
      infoTitle.innerText = "Tab Clipboard";
      infoImg.src = "project_images/tabClipboard.gif";
      infoText.innerText = "This project is a Google Extension that works like a clipboard for Google Tabs. A user is able to save tab(s) and open/access them at a later time. Bookmarks can feel too permenant or become lost in folders. However, this extension has a simple UI that allows easy viewing and managing of saved tabs.";
      infoLink.href = "https://chrome.google.com/webstore/detail/tabclipboard/iofipmlmgcabidcodemgnopjnfcoboho/related?hl=en&authuser=0";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "ChessGame":
      infoTitle.innerText = "Chess Game in Java";
      infoImg.src = "project_images/ChessGame.png";
      infoText.innerText = "This project is my own game of Chess made in Java. This project was done to test my ability as well as give me more experience with larger projects. The code and formatting is my own done with a week of work through my personal time. Sample gameplay can be found below with section links and other game information.";
      infoLink.href = "https://github.com/agonzalez218/JavaChessProject/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "BestPriceSearch":
      infoTitle.innerText = "Best Price Search";
      infoImg.src = "project_images/BestPriceSearch.png";
      infoText.innerText = "My senior capstone project. Allows a user to search for a product among retailers to find the best price.";
      infoLink.href = "https://github.com/agonzalez218/BestPriceSearch/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "ToDoList":
      infoTitle.innerText = "To-Do List in Java";
      infoImg.src = "project_images/ToDoListJavaImg.png";
      infoText.innerText = "The following application was created in Java and is used to maintain a To-Do list. A user can add, edit, or remove actions from the To-Do list and will display them at the main menu.";
      infoLink.href = "https://github.com/agonzalez218/ToDoListJava/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "raytracer":
      infoTitle.innerText = "Raytracer in C";
      infoImg.src = "project_images/raytracerImg.jpg";
      infoText.innerText = "I created my own raytracer in C++. It has shadows, reflections, and transformations.";
      infoLink.href = "https://github.com/agonzalez218/RaytracerCPlus/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "fractals":
      infoTitle.innerText = "OpenGL Lighting Fractals";
      infoImg.src = "project_images/fractalImg.gif";
      infoText.innerText = "A fractal is a never-ending, opr increasingly complex pattern. I coded a few examples in this code and included lighting to better showcase the fractals. The fractals I coded are 3D Sierpinski triangle and Menger Sponge. In addition, I have also included a scene that shows multiple 3D shapes to showcase the lighting on different objects.";
      infoLink.href = "https://github.com/agonzalez218/OpenGLLightingFractals/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "BankMng":
      infoTitle.innerText = "Bank Management System";
      infoImg.src = "project_images/BankMngImg.jpg";
      infoText.innerText = "An application I played a large role in developing. It includes a login form with an account database with user information and account balance. Transactions similar to a bank are made possible and affect the user information and account balance as necessary.";
      infoLink.href = "https://github.com/agonzalez218/BankManagement/";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "BSTVHeap":
      infoTitle.innerText = "BST vs Min Heap";
      infoImg.src = "project_images/BSTVHeapImg.jpg";
      infoText.innerText = "This program compares how quickly these two structures, min heap and binary search tree, find the minimum value from different sets of test data.";
      infoLink.href = "https://github.com/agonzalez218/MinHeapvsBST";
      infoTitleMb.innerText = infoTitle.innerText;
      infoImgMb.src = infoImg.src;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
    case "BallDrop":
      infoTitle.innerText = "Ball Drop";
      infoText.innerText = "This script file was created using the p5 library in javascript. It showcases circles having gravity and physics. It also randomizes circle size, color, and count.";
      infoLink.href = "ballDrop/";
      document.getElementById('lrg-sketch').style.visibility='visible';
      document.getElementById('lrg-sketchMb').style.visibility='visible';
      infoImg.style.visibility="collapse";
      infoImgMb.style.visibility="collapse";
      infoTitleMb.innerText = infoTitle.innerText;
      infoTextMb.innerText = infoText.innerText;
      infoLinkMb.href = infoLink.href;
      break;
  }
}