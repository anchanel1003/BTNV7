//Giải Phương Trình bậc 2
let a = prompt('Nhập giá trị a')
let b = prompt('Nhập giá trị b')
let c = prompt('Nhập giá trị c')
if (a==0 && b !=0){
    console.log('Phương trình vô nghiệm')
}

if(a==0 && b==0){
    console.log('Phương trình có vô số nghiệm')
}

if(a != 0){
    let delta = b*b - 4*a*c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm")
    }
    else{       
        if  (delta > 0){
            let x1 = (-b - math.sqrt(delta)) / (2*a);
            let x2 = (-b + math.sqrt(delta)) / (2*a);
            console.log("Nghiệm thứ nhất của phương trình là X1 =" +x1 );
            // console.log("Nghiệm thứ 2 của phương trình là X2 =" +x2);
        }
        else if (delta == 0){
            let x = (-b) / (2*a);
            console.log("Nghiệm kép của phương trình là X=" +x);
        } 
    }         

}

//Tìm 1 số a có phải là số nguyên tố hay không
let n = prompt('Nhập giá trị của n')
if (n < 2){
    console.log('n không phải là sô nguyên tố')
}
else{
    for(i=2; i< n-1; i++){
        if(n % i == 0){
            console.log("n không phải là số nguyên tố")
        }
        else{
            console.log('n là số nguyên tố')
        }
    }
}
