// PART ONE


function getFacts(nums) {
    let url = `http://numbersapi.com/${nums}?json`;
    let data = axios.get(url);
    console.log(data.text);
}


function getFactsMultiples(nums) {
    let url = `http://numbersapi.com/${nums}?json`;
    axios.get(url)
        .then(response => {
           
            const data = response.data;
            console.log(data); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


getFactsMultiples([1,3,5]);


const body = document.querySelector("body");

function fourNums(nums){
    let fourFacts = [];
    for (let i = 0; i < 4; i++) {
        fourFacts.push(
          axios.get(`http://numbersapi.com/${nums}?json`)
        );
        
        }
        Promise.all(fourFacts)
            .then(facts => {
               for(res of facts) {
                let factP = document.createElement("p");
                factP.textContent = res.data.text;
                document.body.appendChild(factP);
               }
        });
        
    }

fourNums(13);


