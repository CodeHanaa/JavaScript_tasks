let myRequest = new XMLHttpRequest();
myRequest.open("GET","articles.json");
myRequest.send();
myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let myData =JSON.parse(this.responseText);
        console.log(myData);
        myData.forEach(gategory => {
            myData.gategory = "All";
        });
        let data = JSON.stringify(myData);
        console.log(data);
    }
}
