document.getElementById("n").addEventListener('input',inputSum );

 function inputSum(){
	var inputNumber = parseInt(document.getElementById("n").value );
	sum( inputNumber );
}

 function sum(n){
	if (typeof n === 'undefined') return "n is undefined ";
	var sum = 0;
	if (typeof n !== 'number'){
		return 'not a number';
	}
	else{
	for(var i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
}
 }

 function getFibonacci(n) {
	if (n < 1  || n > 10) return 'not allowed';
	if (n === 1) return [1];
	if (n === 2) return [1, 1];
	
	
	const sequence = [1, 1];
	let i = 2;
	
	while (i < n) {
	  sequence.push(sequence[i-1] + sequence[i-2]);
	  i++;
	}
	
	return sequence;
  }