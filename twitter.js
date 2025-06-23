cart=[
  {
    id: "Sebastian Palomino",
    tagline:" Nature_images",
    profilepic:2,
     image:`<img width="560" height="315" src="https://images.pexels.com/photos/10954769/pexels-photo-10954769.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>`,

         
 
       rating: {
      reply: 15,
      repost: 221,
      like: 894,
      view: "32k"
    }
  },
   
  {
    id: "ArthouseStudio",
    tagline:"Maldives",
     profilepic:3,
   image:`<img width="560" height="315" src="https://images.pexels.com/photos/14923409/pexels-photo-14923409.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>`,

         
   
    rating: {
      reply: "14k",
      repost: "110k",
      like: "954",
      view: "19M"
    }
  },
   {
    id: "Gilang Kresnawan",
    tagline:"Dogs",
     profilepic:4,
    image:`<img width="560" height="315" src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"></iframe>`,
         
   
    rating: {
      reply: "4k",
      repost: "10k",
      like: "94",
      view: "10M"
    }
  }
 
]
 
let productsHTML='';
cart.forEach((product)=>{
  productsHTML+=`
 
     
        <div class="post">
           
           <div class="sec1">
              <div class="profilepic${product.profilepic}"></div>
              <div class="post-content">
                <p>${product.id}</p>
                <p> ${product.tagline}</p>
                   
              </div>
           </div>
            <div class="image">
             ${product.image}
            </div>
            <div class="post-likes">
              
               <div>
                <button class="likescount userreply"><i class="fa-regular fa-comment"></i> <span> ${product.rating.reply} </span></button>
               </div>
              <div><i class="fas fa-retweet"></i> ${product.rating.repost}</div>
              <div>
                <button class="likescount userlike"><i class="fa-regular fa-heart"></i> <span> ${product.rating.like} </span></button>
              </div>
              <div><i class="fa-solid fa-chart-column"></i> ${product.rating.view}</div>
              <div class="post-likes">
                  <div  class="bookmark"><i class="far fa-bookmark"></i></div>
                  <div><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
              </div>
            </div>
             
         
        </div>   
        <hr>
 
 
   
    `;
})
 
document.querySelector('.js-products-grid').innerHTML=productsHTML;
let count=0;
document.querySelectorAll(".userlike").forEach((button) => {
  button.addEventListener("click", function () {
    let count = parseInt(this.querySelector("span").innerText);
    count++;
    this.querySelector("span").innerText = count;
  });
});
 
document.querySelectorAll(".userreply").forEach((button)=>{
  button.addEventListener("click",function(){
 
  });
});


 
 

 