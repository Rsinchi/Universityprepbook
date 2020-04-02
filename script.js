let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")


let students =[
  {
    profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2Freceived_298805137763656%20(1).jpg?v=1585534081380",
    name:"Amadou Jallow",
    quote:"I LOVE CODING, ITS THE BEST",
    superlative:"Tech genius",
 },
  {
  profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1237.jpg?v=1585534795688",
    name:"Wendy Sinchi",
    quote:"AMAZON IS THE BEST",
    superlative:"skin care genius"
  },
  {
  profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1236.jpg?v=1585534787876",
    name:"Keiry",
    quote:"I JUST WANT TO WATCH NETFLIX ALL DAY",
    superlative:" most quiet "
  },
  {
profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1239.JPG?v=1585534810551",
    name:"Yunaivi",
    quote:"IM NOT GOING TO DO THIS, IT TOO MUCH WORK",
    superlative:"laziest"
  },
  {
    profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1238.jpg?v=1585534801498",
    name:"Adriana",
    quote:"OH HELL NAHH",
    superlative:"loudest person",
  },
  {
    profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1244.JPG?v=1585535310569",
    name:"Taslima",
    quote:"I need a 24 hr nap",
    superlative: "Bougie"
  },
  {
    profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1242.JPG?v=1585534837715",
    name:"cecilia",
    quote:"You want to pass me ..",
    superlative:"most dramatic",
  },
  {
    profileImage:"https://cdn.glitch.com/adad634d-a48a-406f-95b6-b07295ec99e0%2FIMG_1240.JPG?v=1585534825813",
    name:"Daniel",
    quote:"I love cars",
    superlative:"Most likley to be an engineer"
  },
  
]

let count =0
document.querySelector("#pic").src =students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name
document.querySelector("#quote").innerHTML=students[count].quote
document.querySelector("#superlative").innerHTML=students[count].superlative
let lastStudent = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count++;
  console.log(count)
  if (count > lastStudent){
    count=0
  }
  document.querySelector("#pic").src =students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
document.querySelector("#superlative").innerHTML=students[count].superlative

})

backButton.addEventListener("click",()=>{
  console.log('back')
  count--;
  if (count < 0){
    count=lastStudent
  }
  console.log(count)
  document.querySelector("#pic").src =students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML=students[count].quote
document.querySelector("#superlative").innerHTML=students[count].superlative

})