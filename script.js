
class restaurentManager{
    restaurentList=[
       {
           name:"Zomato",
           address:"balaji colony",
           city:"tirupati"
       },
       {
           name:"Swiggy",
           address:"mc road",
           city:"bangalore"
       },
       {
           name:"Domino's",
           address:"leela Mahal",
           city:"chennai"
       }
   ]
   RestaurentNames=[];
 PrinAllRestaurentNames(){
  
      this.restaurentList.map((item,index)=>{
        //    window.alert(`\n  ${++index}.${item.name}`);
           console.log(item.name);
       document.getElementById('printname').innerHTML=`${item.name}`
       this.RestaurentNames.push(item.name);
    })
    

       document.getElementById('printname').innerHTML=`${this.RestaurentNames}`
       this.RestaurentNames=[];
   }
  filterRestaurentBycity(city){
    return this.restaurentList.filter((item)=>{
           return item.city==city;
       })
   }
}
let obj= new restaurentManager();

let array=obj.filterRestaurentBycity('chennai');
console.log(array);

function Print(){

    obj.PrinAllRestaurentNames();
}
function Filter(){
    let array=obj.filterRestaurentBycity('chennai');
     
      array.map((item)=>{
          console.log(item)
          document.getElementById('filtername').innerHTML=`name:${item.name} \n address:${item.address} \n city:${item.city}` ;
      })
}
orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };  
var values=Object.values(orderData);
keys=Object.keys(orderData);

var Torders=values.reduce((item,nextlement)=>{
    return item+nextlement;
})
function TotalOrders(){
    document.getElementById('Torders').innerHTML=`${Torders}`;
}
function OrderPropotions(){
 
    document.getElementById("Opropotions").innerHTML=`${keys.length}`;
    
}
function Perecentage(){
    var array=this.keys.map((item,index)=>{
         return {id:index,order:item,'order percentage':(this.orderData[`${item}`]/Torders)*100,restaurent:'pujabi Tadka'};
    })
    console.log(array);
    window.alert('check console')
    document.getElementById('per').innerHTML='check consle';
}