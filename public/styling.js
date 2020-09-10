function Hair(name, length, price) {
    this.name = name;
    this.length = length;
    this.price = price;
    this.getPrices = () => price;
    this.getName = () => name;
    this.getlength = () => length;
}
let HairList = [
    new Hair("Faux Locs", ["Short/Bob", "Mid-Back", "Long"], ["2200", "2700", "3200"]),
    new Hair("Faux Goddess Locs",["Mid-Back","Long"], ["2700","3200"]),
    new Hair("Boho Locs", ["Short/Bob", "Mid-Back", "Long"], ["2500", "2800", "3300"]),
    new Hair("Boho Goddess Locs", ["Short/Mid-Back", "Long"], ["3200", "3700"]),
    new Hair("Kinky Wavy", ["Short/Mid-Back", "Long"], ["2700", "3000"]),
    new Hair("Reggae Locs", ["Short/Mid-Back", "Long"], ["2200", "2700"]),
    new Hair("Distress Locs", ["Short/Mid-Back", "Long"], ["2700", "3500"]),
    new Hair("Distress Goddess Locs", ["Short/Mid-Back", "Long"], ["2900", "3700"])

];
//create hair__styles-container append  to hair__styles main
//create hair__styles-items -- number & name 
//create hair__styles-details-container  content
// create hair__styles-detail-items -- size and price 
    let hair__styles = document.querySelector("#styles");
    function addContainers(){
        let hair__styles_container = document.createElement("div");
        hair__styles_container.classList.add("hair__styles-container");
        hair__styles.prepend(hair__styles_container);
        addContent(hair__styles_container);
    }
    function addContent(main){
        for(let i=0;i<HairList.length;i++){
            let hair__styles_items = document.createElement("div");
            let hair__styles_details_container = document.createElement("div");
            hair__styles_items.classList.add("hair__styles-items","main") ;
            hair__styles_details_container .classList.add("hair__styles-details-container","content");
            //Main
            let number = document.createElement("div");
            number.innerHTML = i + 1;
            number.classList.add("number");
            let name = document.createElement("div");
            name.innerHTML = HairList[i].name;
            name.classList.add("name");
            hair__styles_items.appendChild(number);
            hair__styles_items.appendChild(name);
            main.appendChild(hair__styles_items);
            //Content
            for(let a =0;a<HairList[i]["length"].length;a++){
                let hair__styles_details_items = document.createElement("div");
            hair__styles_details_items.classList.add("hair__styles-details-items");
            let size = document.createElement("span");
            let prices = document.createElement("span");
            size.classList.add("size");
            prices.classList.add("price");
            size.innerHTML = HairList[i]["length"][a] + " :";
            prices.innerHTML = HairList[i]["price"][a] + "/=";
                hair__styles_details_items.appendChild(size);
                hair__styles_details_items.appendChild(prices);
                hair__styles_details_container.appendChild(hair__styles_details_items);
            }
            main.appendChild(hair__styles_details_container);
          
        }
       
      
    }
    addContainers();
    let mainSelection = document.querySelectorAll("div.main");
  
    mainSelection.forEach(function(e){
        e.addEventListener("click",function (){
        accordion();
        e.nextSibling.classList.toggle("active");
        });
    });
    function accordion(){
        let content = document.querySelectorAll("div.content");
        content.forEach((e) => e.classList.remove("active"));
    }

    /////////////////////////////////
    /////gallery
    let gallerySection = document.getElementById("gallery");
    let pictures = [];
    for(let i= 1;i<=14;i++){
        let imgsrc= 'public/gallery/img' + i;
        pictures.push(imgsrc);
    }
    function createGallery(){
        for(let i =1;i<pictures.length;i++){
            let img_container = document.createElement("div");
            img_container.classList.add("gallery__img-container");
            let img = document.createElement("img");
            img.classList.add("gallery__img");
            img.src = pictures[i] +".JPG";
            img_container.appendChild(img);
            gallerySection.appendChild(img_container);
        }
       
    }
    createGallery();