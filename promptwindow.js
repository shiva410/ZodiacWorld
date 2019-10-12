function show_prompt()

    {
        var name=prompt("Please enter your name", "Chris P. Bacon");
		//var r = document.getElementById('mySub');
        if (name!=null && name!="")
        {
        //document.write ("Hello " + name + "! How are you today?");
			// r.innerHTML = "Hello " + name + "! How are you today?";
			document.getElementById("mySub").innerHTML = "Thanks for visiting us " + name + "! Please contact us with any questions by visiting the Contact page!";
        }
    }