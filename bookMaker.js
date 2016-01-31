function bookMaker(forecast_account, current_account){
	function whoDidWin(object){
		if(object.first_team > object.second_team){
			return 1;
		}else if(object.first_team < object.second_team){
			return 2;
		}else{
			return 0;
		}
	};
	function compression(client, current, winnig_team){
		if(winnig_team === 0){
			return 1;
		}else if(client.first_team == current.first_team && client.second_team == current.second_team){
			return 2;
		}else{
			return 1;
		}
	};
	let client = {
		first_team: forecast_account.split(':')[0],
		second_team: forecast_account.split(':')[1]
	};
	let current = {
		first_team: current_account.split(':')[0],
		second_team: current_account.split(':')[1]
	};

	let winnig_team = whoDidWin(current);

	if(winnig_team == whoDidWin(client)){
		return compression(client, current, winnig_team);
	}else{
		return 0;
	}
}
console.log(
	bookMaker('1:1','1:1'),
	bookMaker('1:0','1:0'),
	bookMaker('1:0','0:1'),
	bookMaker('2:0','2:1'),
);