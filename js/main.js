// Kanye West Meme

// https://api.kanye.rest

 document.querySelector('button').addEventListener('click', generateTask)

 function generateTask(){
     let url = 'http://www.boredapi.com/api/activity/'

    // fetch goes  
    
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('.activity').innerText = data.activity
        document.querySelector('.description').innerText = data.type 
        
        let urlDictionary = `https://dictionaryapi.com/api/v3/references/collegiate/json/${data.type}?key=f6251167-7b14-47dc-ae49-87f00454acd6`
           
        fetch (urlDictionary)
        .then(res => res.json())
        .then(info =>{
            console.log(info) 
            console.log(info[0])
            console.log(info[0].shortdef[0])
        document.querySelector('.definition').innerText = info[0].shortdef[0]    
    
        })
    })
    .catch(err => {
        console.log('errors $(err)')
    })
}