function factorial(from, to) {
	let data = [];
	function result(value){
		if(value != 1){
			return value * result(value-1);
		}else{
			return value;
		}			
	}		
	for(let i = from; i <= to; i++){
		data.push(result(i));
	}
	return data;
}