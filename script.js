//your code here/
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const compar=(nameA,nameB)=>{
	const articles=['a','an','the'];
	const removeArticles=(name)=> {
	const words=name.split(' ');
	return words.filter(word=>!articles.includes(word.toLowerCase())).join(' ');
	} 
		const bandNameA=removeArticles(nameA)
		const bandNameB=removeArticles(nameB);
		return bandNameA.localeCompare(bandNameB);
}
const sorted=touristSpots.sort(compar);
const list=document.getElementById("band");
for(let i=0;i<sorted.length;i++){
  const listTag=document.createElement("li");
  listTag.innerContent=sorted[i];
  list.appendChild(listTag);
}