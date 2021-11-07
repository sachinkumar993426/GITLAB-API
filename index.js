
document.getElementById("primary").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("sachin kumar the great")
//************ */
    let apiKey = "https://gitlab.com/api/v4/projects/13083"
    fetch(apiKey).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);
        let i = 0;
         var str = "";
        for (key in data) {


            var key = Object.keys(data)[i];
            if(key=="namespace"){
                  let j=0;
                for (let k in data.namespace){

                // console.log(Object.keys(data.namespace)[j]);
            
                // console.log(Object.values(data.namespace)[j]);
                // console.log(data.namespace[k]);   
               let key= Object.keys(data.namespace)[j];            
                let value=data.namespace[k];
                // console.log(`${key} : ${value}`);
                str += `<li>${key} : ${value} </li>`;
                   j++;
                }
            }
            var value = data[key];
            str += `<li>${key} : ${value} </li>`;
            document.getElementById("demo").innerHTML = str;
            i++;
        }
    }).catch((error) => {
        console.log("error is coming.....")
    })
})
//*****************************2ND******************************** */


document.getElementById("second").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("sachin kumar the great")

    
    let apiKey = "https://gitlab.com/api/v4/projects/31115989"
    fetch(apiKey).then((response) => {
        
        return response.json();
    }).then((data) => {

        console.log(data);
        let i = 0;
         var str = "";
        for (key in data) {


            var key = Object.keys(data)[i];
            if(key=="namespace"){
                  let j=0;
                for (let k in data.namespace){

                   
               let key= Object.keys(data.namespace)[j];            
                let value=data.namespace[k];
                str += `<li>${key} : ${value} </li>`;
                   j++;
                }
            }
            var value = data[key];
            str += `<li>${key} : ${value} </li>`;
            document.getElementById("demo").innerHTML = str;
            i++;
        }
    }).catch((error) => {
        console.log("error is coming.....")
    })
})


//*********************3RD************************************ */


document.getElementById("third").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("sachin kumar the great")

  
    let apiKey = "https://gitlab.com/api/v4/projects/31116109"
    fetch(apiKey).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);
        let i = 0;
         var str = "";
        for (key in data) {


            var key = Object.keys(data)[i];
            if(key=="namespace"){
                  let j=0;
                for (let k in data.namespace){

               let key= Object.keys(data.namespace)[j];            
                let value=data.namespace[k];
                str += `<li>${key} : ${value} </li>`;
                   j++;
                }
            }
            var value = data[key];
            str += `<li>${key} : ${value} </li>`;
            document.getElementById("demo").innerHTML = str;
            i++;
        }
    }).catch((error) => {
        console.log("error is coming.....")
    })
})


//******************************4TH**********************************//



document.getElementById("fourth").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("sachin kumar the great")

    let apiKey = "https://gitlab.com/api/v4/projects/6853087"
    fetch(apiKey).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);
        let i = 0;
         var str = "";
        for (key in data) {


            var key = Object.keys(data)[i];
            if(key=="namespace"){
                  let j=0;
                for (let k in data.namespace){

               let key= Object.keys(data.namespace)[j];            
                let value=data.namespace[k];
              
                str += `<li>${key} : ${value} </li>`;
                   j++;
                }
            }
            var value = data[key];
            str += `<li>${key} : ${value} </li>`;
            document.getElementById("demo").innerHTML = str;
            i++;
        }
    }).catch((error) => {
        console.log("error is coming.....")
    })
})

//******************************5TH*************************************//


document.getElementById("fifth").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("sachin kumar the great")

    let apiKey = "https://gitlab.com/api/v4/projects/31116015"
    fetch(apiKey).then((response) => {

        return response.json();
    }).then((data) => {

        console.log(data);
        let i = 0;
         var str = "";
        for (key in data) {


            var key = Object.keys(data)[i];
            if(key=="namespace"){
                  let j=0;
                for (let k in data.namespace){
  
               let key= Object.keys(data.namespace)[j];            
                let value=data.namespace[k];
               
                str += `<li>${key} : ${value} </li>`;
                   j++;
                }
            }
            var value = data[key];
            str += `<li>${key} : ${value} </li>`;
            document.getElementById("demo").innerHTML = str;
            i++;
        }
    }).catch((error) => {
        console.log("error is coming.....")
    })
})