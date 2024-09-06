const random_image_point = "https://dog.ceo/api/breeds/image/random";

 const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "germanshepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "germanlonghair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];

  function getRandomElement(array){
    const i = Math.floor(Math.random() * array.length);   // array length like 3,4,5, (how many options we want)
        return array[i];
  }
   
//   function shuffleArray(array) {
//     return array.sort((a,b) => Math.random() - 0.5);
// }

function shuffleArray(array) {      
    const n = array.length;            // rechecked
    for (let i= 0 ; i<n ;i++){                  
        const j = Math.floor(Math.random() * (i+1));   
    // Swap the elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
   }
     return array;  // Return the shuffled array
}

  let n ;
 function getMultipleChoices(n,correctAnswer,possibleChoices){
    const choices = []
    choices.push(correctAnswer);
    while(choices.length < n ){
        let candidate = getRandomElement(possibleChoices);
        if(!choices.includes(candidate)){
           choices.push(candidate);
        }
   }

    return shuffleArray(choices);
 }  

  function getBreedFromURL(url){
      //  let urlParts = url.split("/");   // parts which comes after splitting 
      //  let splitter = urlParts[4];
        let unsplitBreed = url.split("/")[4];      // unsplit mtlb poodle-standard (split toh h lkn agr 2 aajaye toh ni h)
        // let splitArray = unsplitBreed.split("-");
        // let reverseArray =  splitArray.reverse();
        // let joinReverseArray = reverseArray.join(" ").trim();
        // return joinReverseArray;
        let [breed,subbreed] = unsplitBreed.split("-");
        return[subbreed, breed].join(" ").trim();
      }


  async function fetchMessage(url) {
    try{
      const response = await fetch(url);
      const body = await response.json();
      const {message} = body ;       // it is used to extract the message which is in the array form from body 
      return message;
    } catch {
       console.log("Error fetching data:" , error);
       return null ;
    }
  }
   
  
 /// now i am going to implement all these functions into our page ... adding all stufs like pictures and buttons


 function renderButtons(choicesArray, correctAnswer) {


     function buttonHandler(e) {
       if (e.target.value === correctAnswer) {
         e.target.classList.add("correct");
        } else {
                e.target.classList.add("incorrect");
                document.querySelector(`button[value="${correctAnswer}"]`).classList.add("correct");
             }
      }
 
      const options = document.getElementById("options"); // Container for the multiple-choice buttons


       for(let choice of choicesArray){
        const button = document.createElement("button");
        button.textContent = choice ;     // we can also use setAttribute property here
        button.value = choice;
        button.name = choice;
        button.addEventListener("click" , buttonHandler);// we donot call the btnhandler function but onlu passes as a callback function
         options.appendChild(button);       // to pass the element bcz we donot have any function like element.push
         
        }
    }


         function renderQuiz(imgUrl, correctAnswer , choices){
             const image = document.createElement("img");
             image.setAttribute("src", imgUrl);   // This code does not display the image yet, but it prepares the image to be loaded.
             const frame = document.getElementById("image-frame");  //The image will be inserted into this frame once it's ready.


             image.addEventListener("load", ()=> {   // wait until image has been loaded
                  frame.replaceChildren(image);     // all  previous content remove and only image will display
                  renderButtons(choices,correctAnswer);  // option displY

             })
         }

        async function loadQuizData(){
          document.getElementById("image-frame").textContent = "Fetching Doggo...";

          const doggoImgUrl = await fetchMessage(random_image_point) ; // it give me the url of totally  random breed   ... it don't give me the image but tha url of that image 
           const correctBreed = getBreedFromURL(doggoImgUrl);
           const breedChoices = getMultipleChoices(3 , correctBreed, BREEDS);


         return[doggoImgUrl, correctBreed , breedChoices];

          
        }
         async function startQuiz(){    
          const [imgUrl , correctAnswer , choices] = await loadQuizData();
          renderQuiz(imgUrl, correctAnswer , choices);
         
         }
         startQuiz();
        

    