let flag = 1;

const ticTacToe = (ele) =>{
   
    if(flag % 2 != 0){
        if(ele.innerText.trim() != ''){
            return;
        }
        ele.innerText = "O";
        flag++;
    }else{
        if(ele.innerText.trim() != ''){
            return;
        }
        ele.innerText = "X";
        flag++;
    }
    if(winner = check()){
        alert(winner + " is the winner");
        location.reload();
    }else if(flag==10){
        alert("match draw");
        location.reload();
    }else{
        if(flag == 2 || flag == 4 || flag == 6 || flag == 8){
            document.getElementById("turn").innerText = "Turn  X";
        }else{
            document.getElementById("turn").innerText = "Turn  O";
        }
    }
    // alert('hello');
}

const check = ()=>{
    d1 = box1.innerText;
    d2 = box2.innerText;
    d3 = box3.innerText;
    d4 = box4.innerText;
    d5 = box5.innerText;
    d6 = box6.innerText;
    d7 = box7.innerText;
    d8 = box8.innerText;
    d9 = box9.innerText;  

    // row
    if(d1 == d2 && d2 == d3 && d1 != '' && d2 != '' && d3 != ''){
        return d1;
    }
    else if(d4 == d5 && d5 == d6 && d4 != '' && d5 != '' && d6 != ''){
        return d4;
    }
    else if(d7 == d8 && d8 == d9 && d7 != '' && d8 != '' && d9 != ''){
        return d7;
    }
    // column
    else if(d1 == d4 && d4 == d7 && d1 != '' && d4 != '' && d7 != ''){
        return d1;
    }
    else if(d2 == d5 && d5 == d8 && d2 != '' && d5 != '' && d8 != ''){
        return d2;
    }
    else if(d3 == d6 && d6 == d9 && d3 != '' && d6 != '' && d9 != ''){
        return d3;
    }
    // diagonals
    else if(d1 == d5 && d5 == d9 && d1 != '' && d5 != '' && d9 != ''){
        return d1;
    }
    else if(d3 == d5 && d5 == d7 && d3 != '' && d5 != '' && d7 != ''){
        return d3;
    }else{
        return
    }

}