


allFood = []

const createFood = ()=>{
    alert()
    let food = document.getElementById('foodInput').value
    let desc = document.getElementById('descInput').value
    let picture = document.getElementById('picInput').files[0]

    class FoodItem {
        constructor(name, descrption, picture){
            this.name = name;
            this.desc = descrption;
            this.picture = picture;
    
    
        }
    }

    let display = new FileReader ();
    if (picture) {
        display.readAsDataURL(picture)
    }

    display.onload=(event)=>{
        let foodObj = new FoodItem (food, desc, event.target.result)
        allFood.push(foodObj)
        let getStorage = JSON.parse(localStorage.getItem('foodItem')) || []
        getStorage.push(foodObj)
        localStorage.setItem('foodItem', JSON.stringify(getStorage))
        show()
        
    }
}
 document.addEventListener('DOMContentLoaded', () =>{
    //   let retrieveItem = JSON.parse(localStorage.getItem('foodItem'));
    //   retrieveItem.map((task)=>{
    //      //  show.innerHTML=''
    //       show.innerHTML += `
    //       Name: ${task.name}
    //       Description: ${task.desc}
    //       <img src="${task.picture}" alt="">
      
      
    //       `
    //   })


    show()
 })
 const show =()=>{
    let displayNew = document.getElementById('show');
      displayNew.innerHTML=''
    let retrieveItem = JSON.parse(localStorage.getItem('foodItem'));
    retrieveItem.map((task)=>{
        displayNew.innerHTML += `
        <div class="shadow p-3 col-6 ms-3 mt-3 g-4">
        <p> Name: ${task.name} </p>
        <p>Description: ${task.desc} </p>
        <img src="${task.picture}" alt="">
        </div>
        `
    }) 
}
// window.show= show
 
 

//     const showFood = () => {
//         let show = document.getElementById('show'); // Assuming you have an element with id 'show'
//         show.innerHTML = ''; // Clear the previous content
//         let getStorage = JSON.parse(localStorage.getItem('foodItems')) || []; // Retrieve stored food items
//         getStorage.forEach((task) => { // Use forEach instead of map since you're not returning anything
//             show.innerHTML += `
//                 <div>
//                     <p>Name: ${task.name}</p>
//                     <p>Description: ${task.desc}</p>
//                     <img src="${task.picture}" alt="">
//                 </div>
//             `;
//         });
//     }
// }

{/* <p> Name: ${task.name} </p>
        <p>Description: ${task.desc} </p>
        <img src="${task.picture}" alt="">
         */}

