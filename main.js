// //davaleba 1
function getNum(...nummbers){
    if (nummbers.length <= 2){
      return "write   more then two numbers"
    }
    const fisrtArry=nummbers[0]+nummbers[1]
    const secondArry = nummbers.slice(2).reduce((n3,n4)=>n3*n4,1)
  
     return {
      first: fisrtArry,
      second: secondArry
     }
  }
    const result=getNum(1,2,3,4)
    const result1=getNum(1,2)
    console.log(result)
    console.log(result1)
  
  // // //davaleba 1.2
  function getNum1(...nummers){
        if (nummers.length<=2){
          return "write more then two numbers"
        }
         
          let sum =0;
          let multiply=1;
     
        nummers.forEach((num1,index) => { 
          if (index<2){
           sum +=num1
          }else{
              multiply *=num1;
          }
          })
          
          return{
              sum: sum,
              multiply: multiply
           };
          }
    
           
     
       const results = getNum(1, 2, 3, 4);
       const results1=getNum(1,2)
       console.log(results); 
       console.log(results1); 
  
  // davaleba 2.1
  
  const user= { banks :[Georgianbank={  adress:{city:"tbilisi"}},tbcbank={ adress:{city:'batumi', }},sparkase={ adress:{city:'dortmund'}}, bazisbank={ adress:{city:"tbilisi"}}]}
  
  
  
  
  function getcity (user) {
      const {banks}=user;
      if (banks && banks[2]&&banks[2].adress){
          const {city}=banks[2].adress;
          return city;
      }
       return undefined;
  }
  console.log(getcity (user))
  
  //davaleba 2.1
  function getcity(user) {
      return user.banks?.[2]?.adress?.city;
  }
  console.log(getcity (user))
          
  // //davaleba 3
  
  
  
  const object= {
      name:'mariam', age:26, country:"Geogia", adress:{city:"chiatura", fulladress:"streetofbatumi"} ,languages:['georgian','german','english']}
  
   function newobject(obj){ 
      const copyObj = {
          ... obj,
          adress : { ...obj.adress},
          languages: [...obj.languages]
      }
      return copyObj
  }
  
  const cloneobject=newobject(object)
  console.log(cloneobject)
  console.log(object)
  console.log(object===cloneobject)