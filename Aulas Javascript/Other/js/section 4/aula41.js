

eatBananas = () => {

    let bananasPrompt = Number(prompt("How many bananas would you like to eat?")); //prompt is for strings, number for int, etc
    let bananasLeft = bananasPrompt;

    console.log(`I bought ${bananasPrompt} bananas`)

    for (let i = 1; i <= bananasPrompt; i++) {

        bananasLeft--;

        if (i === 1) {

            console.log(`I ate ${i} banana \n Now I have ${bananasLeft} left`);
            continue;
        }

        if (bananasLeft === 0) {
            console.warn(`I ate ${i} bananas \n I need to buy more bananas`);

        } else {
            console.log(`I ate ${i} bananas \n Now i have ${bananasLeft} left`);
        }



        document.getElementById("banana-Button").addEventListener("click",function (event)){

            let bananaButton = document.getElementById("banana-Button")
            let banana
        }





    };




    

};



// addBananas = () => {

//     document.getElementById("banana-Button").addEventListener("click", function (event)){

//         let bananaButton = document.getElementById("banana-Button")

//     let 
    
//     for (let i = 0; i <  ){

//     }
        
//     } 

// };
