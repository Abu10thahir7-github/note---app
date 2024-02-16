 








function submit(){
    
    var title =  document.getElementById('title').value;
    var text = document.getElementById('inputBox').value;
  
    localStorage.setItem('title',title);
    localStorage.setItem('text',text);
   
    if(title == "" || text == ""){
        alert("Please enter the title and text");
    }
    else{

        var add = document.getElementById('add-Items');
        var option = document.createElement('option');
        option.text = title;
        add.add(option, add[0]);

    

    }

   

}





