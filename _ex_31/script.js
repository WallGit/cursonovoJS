let nums = [ 1,2,3,4,5,6];
let nums2 = [1,2,3];

function verificaElementosArray(arr){
    if(arr.length >= 5){
        console.log("muitos elementos");
    } else{
        console.log("poucos elemementos");
    }
}

verificaElementosArray(nums);
verificaElementosArray(nums2);