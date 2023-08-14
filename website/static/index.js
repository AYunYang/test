const search=() =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitmes = document.getElementById("book-list")
    const books = document.querySelectorAll(".books")
    const bname = document.getElementsByTagName("h2")

    for(var i=0; i < bname.length; i++){
        let match = books[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchbox)> -1){
            books[i].style.display = "";
            }else{
                books[i].style.display = "none";

            }
        }   
    }
}

document.getElementById('logout').addEventListener('click',userout)
function userout(){
    fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/", {
      method: "POST",
      body: JSON.stringify({
        "data": {
          "active":0
        },
        "query": "select * from tqDVavbc09WjAg9o where active"
      }),
    }).then(res => {
      if (res.status === 201) {
        console.log("Request successful");
        setTimeout(function (){ window.location.href = "Login.html";},2000);
      } else {
        console.error("Request failed");
      }
    });


}


