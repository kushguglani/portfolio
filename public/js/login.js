document.querySelector('.login').addEventListener('click',login);

function login(){
	var name = document.querySelector('#name').value;
	var password = document.querySelector('#password').value;
    if(name ==="" && password ===""){
        return false;
    }
    else{
        axios.post('/contactDetails5',{
            params:{
                data:{
                    name:name,
                    password:password
                }
            }
        })
        .then(function(response){
            console.log(response);
        })
    }
}