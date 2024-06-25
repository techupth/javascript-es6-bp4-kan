let height = undefined;
let result;
function valueCheck(height){
   return height=undefined?? 'Height is not defined'
}
result=valueCheck(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
