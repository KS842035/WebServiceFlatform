var numberClicked = false; 
var resultClicked = false;

function add (char) {
		if (resultClicked){
			document.getElementById('box').value="";
			document.getElementById('result').value="";
			resultClicked=false;
		}
        if(numberClicked == false) { 
            if(!(isNaN(char) == true)) {
                document.getElementById('box').value += char;
            }
        } else {
            document.getElementById('box').value += char;
        }
 
        if(isNaN(char) == true) { 
            numberClicked = false;
        } else {
            numberClicked = true;
        }
    }
	

function calculate(){
	resultClicked=true;
	var box=document.getElementById('box'); 
	var result=eval(box.value);
	document.getElementById('box').value="";
	document.getElementById('result').value=result;// caculate를 통해 결과 값을 표출 하라.
}


function reset(){
	resultClicked=false;
	document.getElementById('box').value="";//추후에 ac를 누르면 초기화를 만들기 위해 설치
	document.getElementById('result').value=""; //추후에 ac를 누르면 초기화를 만들기 위해 설치
}