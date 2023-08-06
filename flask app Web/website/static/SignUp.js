
function func1() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var username = document.getElementById("admin_no").value;


    if (password == confirmpassword && username != ""){
        document.getElementById('show').innerHTML ="Sucessful! Please Wait...";
        //Redirect to "index.html" after a 2s delay
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
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
    if (password == confirmpassword && username != ""){$.ajax({
        url:"https://api.apispreadsheets.com/data/CPJcxir7lZelZTsd/",
		type:"post",
		data:$("#myForm").serializeArray(),
		success: function(){
		},
	    error: function(){
		}
    });
}
}


