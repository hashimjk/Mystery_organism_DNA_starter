// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Creating a factory function. To mutate DNA 

const pAequorFactory = (num,arr)=>{

 return {
  _specimenNum: num,
  _dna: arr,
  mutate: function(){
    const randomNum = Math.floor(Math.random() * this._dna.length);
  let newBase;
  do{
    newBase = returnRandBase();
  }
  while(newBase === this._dna[randomNum]);

   this._dna[randomNum] = newBase;
   return this._dna;
  },
  compareDNA:function(pAequor){
    let commonCount = 0;

    for(let i=0;i<this._dna.length;i++){
      if(pAequor._dna[i]===this._dna[i]){
          commonCount++;
      }
    }
     const commonPercentage = (commonCount/this._dna.length)*100;

     console.log(`Specimen ${this._specimenNum} and specimen ${pAequor._specimenNum} have ${commonPercentage.toFixed(0)}% in common.`);
  },
  //Checking if DNA contains At least 60 percent of "C" Or "G".
  willLikelySurvive: function(){
    let countG = 0;
    let countC = 0;
    for (let i = 0; i < this._dna.length; i++) {
      if (this._dna[i]==='G') {
        countG++;
      }else if(this._dna[i]==='C'){
        countC++;
      }
       }
       const percentG = (countC/this._dna.length)*100;
       const percentC = (countG/this._dna.length)*100;
      //  console.log(percentC)
      //  console.log(percentG)
       if(percentG >=60 || percentC >= 60){
          return true;
       }else{
        return false; 
  
       }
      
  }
 };
}


//Creating 30 instances that can survive the surviving crietria of 60%
let survivingInstances = [];

let numInstances = 30;
let instanceCount = 1;

while (survivingInstances.length<numInstances) {
 let newAequor = pAequorFactory(instanceCount,mockUpStrand());
 if (newAequor.willLikelySurvive()) {
    survivingInstances.push(newAequor);
 }  
 instanceCount++;
}
console.log(survivingInstances);
//Testing

//  let test1 = pAequorFactory(1,mockUpStrand());
// console.log(test1.willLikelySurvive());


// console.log("Orignal DNA: ",org._dna);
// org.mutate();
// console.log("Mutated DNA",org._dna);





