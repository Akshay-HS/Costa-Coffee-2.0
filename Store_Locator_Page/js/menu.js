function food()
{fetch("https://picsum.photos/v2/list/?limit=100")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
 const user = data.users;
    for(let i=0;i<3;i++){
const container=document.getElementById("main-container");
container.className="main-container";   
const con=document.createElement("div");
con.className="menu-item-container";
const lcont=document.createElement("div");
lcont.className="left-container";
const img3=document.createElement("img");
const ran=Math.floor(Math.random() * 25);
img3.src=data[ran].download_url;
img3.id="foodimg";
const rcont=document.createElement("div");
rcont.className="right-container";
const h2=document.createElement("h2");
h2.textContent=data[ran].author;
h2.className="headtxt";
const p=document.createElement("p");
p.textContent=" Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";

rcont.appendChild(h2);
rcont.appendChild(p);
lcont.appendChild(img3);
con.appendChild(lcont);
con.appendChild(rcont);
container.appendChild(con);



const con2=document.createElement("div");
con2.className="menu-item-container";
const lcont2=document.createElement("div");
lcont2.className="left-container";
const head2=document.createElement("h2");
const ran1=Math.floor(Math.random() * 25);
head2.textContent=data[ran1].author;
const p2=document.createElement("p");
p2.textContent=" Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";

const rcont2=document.createElement("div");
rcont2.className="right-container";
const img5 =document.createElement("img");
img5.src=data[ran1].download_url;
img5.id="foodimg";[]
container.appendChild(con2);
con2.appendChild(rcont2);
con2.appendChild(lcont2);
rcont2.appendChild(head2);
rcont2.appendChild(p2);
lcont2.appendChild(img5);
    }
  
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
}
food();


  document.addEventListener("DOMContentLoaded", function() {
    var drinksLink = document.querySelector('#nav-bar-food a[href="#drinks"]');
    drinksLink.addEventListener('click', function() {
      
      reloadDIV ();
      drinks();
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
  var foodLink = document.querySelector('#nav-bar-food a[href="#food"]');
  foodLink.addEventListener('click', function() {     
   reloadDIV ();
    });
  });





  function reloadDIV ()
  {
      $('#maincontainer').empty();
  }



  function drinks()
  {
  const user = data.users;
  const container=document.getElementById("main");
  container.className="main";   
  const con=document.createElement("div");
  con.className="menu-item-container";
  const lcont=document.createElement("div");
  lcont.className="left-container";
  const img3=document.createElement("img");
  const ran=Math.floor(Math.random() * 25);
  img3.src=data[ran].download_url;
  img3.id="foodimg";
  const rcont=document.createElement("div");
  rcont.className="right-container";
  const h2=document.createElement("h2");
  h2.textContent=data[ran].author;
  h2.className="headtxt";
  const p=document.createElement("p");
  p.textContent=" Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";
  
  rcont.appendChild(h2);
  rcont.appendChild(p);
  lcont.appendChild(img3);
  con.appendChild(lcont);
  con.appendChild(rcont);
  container.appendChild(con);
  
  
  
  // const con2=document.createElement("div");
  // con2.className="menu-item-container";
  // const lcont2=document.createElement("div");
  // lcont2.className="left-container";
  // const head2=document.createElement("h2");
  // const ran1=Math.floor(Math.random() * 25);
  // head2.textContent=data[ran1].author;
  // const p2=document.createElement("p");
  // p2.textContent=" Perfectly extracted, this short, aromatic, intense drink contains all the best flavour from our coffee beans.";
  
  // const rcont2=document.createElement("div");
  // rcont2.className="right-container";
  // const img5 =document.createElement("img");
  // img5.src=data[ran1].download_url;
  // img5.id="foodimg";[]
  // container.appendChild(con2);
  // con2.appendChild(rcont2);
  // con2.appendChild(lcont2);
  // rcont2.appendChild(head2);
  // rcont2.appendChild(p2);
  // lcont2.appendChild(img5);
    }




    document.addEventListener("DOMContentLoaded", function () {
    const cookieButton = document.getElementById("cookieButton");
    const acceptButton = document.getElementById("acceptButton");
    const cookieDialog = document.getElementById("cookieDialog");
  
    // Function to toggle the button state and show/hide the dialog
    function toggleButtonState() {
      if (cookieButton.classList.contains("open")) {
        closeCookieDialog();
      } else {
        openCookieDialog();
      }
    }
  
    function openCookieDialog() {
      cookieDialog.style.display = "block";
      cookieButton.classList.add("open");
    }
  
    function closeCookieDialog() {
      cookieDialog.style.display = "none";
      cookieButton.classList.remove("open");
    }
  
    acceptButton.addEventListener("click", function () {
      closeCookieDialog();
    });
  
    cookieButton.addEventListener("click", toggleButtonState);
  });
  