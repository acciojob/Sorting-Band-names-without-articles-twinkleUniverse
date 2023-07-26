//your code here
function removeArticles(text) {
  const articles = ["a", "an", "the"];
  const words = text.split(" ");
  return words.filter(word => !articles.includes(word.toLowerCase())).join(" ");
}

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let modifiedArray = touristSpots.map(removeArticles);
let ans=[];

let sorted=modifiedArray.sort();
for(let i=0;i<touristSpots.length;i++){
	let words=removeArticles(touristSpots[i])
	let indexSort=sorted.indexOf(words);
    ans[indexSort]=touristSpots[i];
}
console.log(ans);