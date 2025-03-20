// //Example of Synchronous 
console.log("Danish");
console.log("hello");
console.log("world");
// //Example of Asynchronous 
console.log("Danish");
setTimeout(function (){
    console.log("This code will be executed later");

},3000);
console.log("hello");
console.log("world");


// //1.Example of Callback Hell

function personDetail(callback){
    setTimeout(()=>{
        console.log("Enter the user name:-");
        callback();
    },2000)
}

function moreDetail(){
    console.log("Enter the user Age:-");
}

personDetail(moreDetail);   

// //Example of Callback Hell task chaining
function getUserData(callback) {
    setTimeout(() => {
        console.log("User data retrieved");
        callback();
    }, 1000);
}

function getUserPosts(callback) {
    setTimeout(() => {
        console.log("User posts retrieved");
        callback();
    }, 1000);
}

function getUserComments(callback) {
    setTimeout(() => {
        console.log("User comments retrieved");
        callback();
    }, 1000);
}

// Its Nested CallBack 
getUserData(()=>{
    console.log("First Call");
    
    getUserPosts(()=>{
        console.log("Second Call");
        getUserComments(()=>{
            console.log("Therid Call");

            console.log("All Data Access SuccesFully");
            
            
            
        })
    })
});

//2.using modern javaScript avoid nested calling in callback chaining using by promise

function userName(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("User Name is Danish");
            resolve();  
        },1000);
    });
};


function userAge(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("User Age is 21 year old");
            resolve();  
        },1000);
    });
};

function userEmail(){
    return new Promise((resolve) => {
        setTimeout( ()=> {
            console.log("User Email is danishdanishkhan34099@gmail.com");
            resolve();
        },1000);
      });
};

//its make easy to read and don't required no deep nesting
userName()
.then(userAge)
.then(userEmail)
.then(()=>console.log("All user detail"));

//And other way to make more readable using Async/Await

async function userDetail(){
    await userName();
    await userAge();
    await userEmail();
    console.log("Its User All Data in the dateail");

}

userDetail();


//Example Error handling in promise
try{
userName()
.then(userAge)
.then(userEmail)
.then(()=>console.log("All user detail"));

}catch(error){
    console.log("Error :-",error);
}

//Example error handling in Async/Await
async function userDetail(){
    try{
        await userName();
    await userAge();
    await userEmail();
    console.log("Its User All Data in the dateail");

    }catch(error){
        console.log("Error :-",error);
        
    }
    
}

//Example use promise all
async function userDetail(){
        try{
            const[name,age,email]=await Promise.all([
                name=await userName(),
               age= await userAge(),
               email= await userEmail(),
            ]);
           
            
       
        console.log("Its User All Data in the dateail");
    
        }catch(error){
            console.log("Error :-",error);
            
        }
        
    }

    userDetail();