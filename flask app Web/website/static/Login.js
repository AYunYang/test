
/*function authentication() {
    var password = document.getElementById("password").value;
    var username = document.getElementById("admin_no").value;

    if (username == "2224079" && password == "qwerty"){
        document.getElementById('show').innerHTML ="Sucessful! Please Wait...";
        //Redirect to "index.html" after a 2s delay
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
        return false;
    }
    else {
        document.getElementById('show').innerHTML = "Password incorrect! User Not Found";
        return false

    }
}*/

function compareAdminNumberAndPassword(admin_number, check_pass) {
  fetch("https://api.apispreadsheets.com/data/CPJcxir7lZelZTsd/")
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Failed to fetch data from the API.");
      }
    })
    .then((data) => {
      try {
        const parsedData = data;

        function findAdminNumber(adminNo) {
          for (const item of parsedData.data) {
            if (item.admin_no === adminNo) {
              return item;
            }
          }
          return null;
        }

        const matchedItem = findAdminNumber(admin_number);

        if (matchedItem) {
          if (
            check_pass === matchedItem.password ||
            check_pass === matchedItem.confirmpassword
          ) {
            console.log("password match");
            window.location.href = "index.html";
          } else {
            console.log("password not match");
            window.location.href = "Login.html"
          }
        } else {
          console.log("Admin number not found in the data.");
        }
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });
}

const submitButton = document.getElementById("btn_submit");

submitButton.addEventListener("click", function () {
  const admin_number = document.getElementById("admin_no").value;
  const check_pass = document.getElementById("password").value;

  compareAdminNumberAndPassword(admin_number, check_pass);
});

/*function subform() {
    var password = document.getElementById("password").value;
    var username = document.getElementById("admin_no").value;

    function fetching() {
        return fetch("https://api.apispreadsheets.com/data/CPJcxir7lZelZTsd/")
            .then(res => {
                if (res.status === 200) {
                    // SUCCESS
                    return res.json().then(data => {
                        const yourData = data;

                        // Compare password with data
                        if (yourData.password === password && yourData.admin_no === username) {
                            document.getElementById('show').innerHTML ="Sucessful! Please Wait...";
                            //Redirect to "index.html" after a 2s delay
                            setTimeout(function () {
                                window.location.href = "index.html";
                        }, 2000);
                            console.log("Password is correct!");
                        } else {
                            document.getElementById('show').innerHTML = "Password incorrect! User Not Found";
                            console.log("Password is incorrect!");
                        }
                    });
                } else {
                    // ERROR
                    console.log("Error fetching data.");
                }
            })
            .catch(err => console.log(err)); // Handle fetch errors
    }

    // Call the fetching function and return the promise for further use if needed
    return fetching();
}*/
  
