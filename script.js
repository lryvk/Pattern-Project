var changeBox = {
    "1": "Box1" ,
    "2": "Box2" ,
    "3": "Box3" ,
    "4": "Box4" ,
}

const sqaure = document.getElementById('square');
const input2 = document.getElementById('input2'); 

function changeBox() {
    const word= textBox1.value;
    console.log(word)
    if (word in colorTable) {
    console.log(colorTable[word])
        changeBox.style.backgroundColor = changeBox[word];   
    
    }
}

for (let i = 0; i < square.value; i++) {
    console.log(i)
  }
  
  const textBox1 = document.getElementById('square');
  textBox1.addEventListener("input", changeBox);
