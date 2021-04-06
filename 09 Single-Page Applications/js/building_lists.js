
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var table = document.createElement('table');
var tr = document.createElement('tr');
var tr2 = document.createElement('tr');
var titleH = document.createElement('th');
titleH.innerHTML = "Title"
tr.appendChild(titleH);
var yearH = document.createElement('th');
yearH.innerHTML = "Year"
tr2.appendChild(yearH);
table.appendChild(tr);

for (var i=0; i < books.length; i++) {
	//console.log(books[i].title);
	var titleC = document.createElement('th');
	titleC.innerHTML = books[i].title;
	tr.appendChild(titleC);
	var yearC = document.createElement('th');
	yearC.innerHTML = books[i].year;
	tr2.appendChild(yearC);
	table.appendChild(tr2);
	table.appendChild(tr);

}
document.body.appendChild(table);

document.querySelector('titleC').onclick = function() {
	var title = document.querySelector('titleC').value;
	document.querySelector('h1').innerHTML = title;
}
