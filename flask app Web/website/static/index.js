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

