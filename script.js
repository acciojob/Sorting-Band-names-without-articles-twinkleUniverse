//your code here/
function removeArticles(text) {
  const articles = ["a", "an", "the"];
  const words = text.split(" ");
  return words.filter(word => !articles.includes(word.toLowerCase())).join(" ");
}

// Example array of strings
 originalArray = ['Tajmahal', 'Tajmahal', 'Tajmahal'];

const modifiedArray = originalArray.map(removeArticles);
const sortedArray = modifiedArray.slice().sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

const outputArray = sortedArray.map((modifiedStr) => {
  const index = modifiedArray.indexOf(modifiedStr);
	console.log(index)
  return originalArray[index];
});
console.log(outputArray);
