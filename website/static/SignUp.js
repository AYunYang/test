
function func1() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var username = document.getElementById("admin_no").value;


    if (password == confirmpassword && username != ""){
        document.getElementById('show').innerHTML ="Sucessful! Please Wait...";
        //Redirect to "index.html" after a 2s delay
        setTimeout(function () {
            window.location.href = "index.html";
        }, 10000);
        return false;
    }
    else {
        document.getElementById('show').innerHTML = "Passwords are not the same or admin number not provided";
        return false

    }
}

function SubForm (){
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var username = document.getElementById("admin_no").value;
    if (password == confirmpassword && username != ""){
    fetch("https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/", {
        method: "POST",
        body: JSON.stringify({
          "data": {
              "admin_no":username,
              "password":password,
              "active":"1"
          },
          "query": `select *
                    from tqDVavbc09WjAg9o
                    where admin_no = ${username}`
        }),
      }).then(res => {
        if (res.status === 201) {
          console.log("Request successful");
        } else {
          console.error("Request failed");
        }
      }).catch(error => {
        console.error("An error occurred:", error);
      });
}
}


