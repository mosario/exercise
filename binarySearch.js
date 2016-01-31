function binarySearch(){
	let first,last,middle,mid;

	let arr = [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20];
	
	let left = arr[0];
	let right = arr[arr.length-1];

	while(left <= right){

		mid=left+(right-left)/2;
		middle = Math.ceil(mid);

		if(middle == arr[middle-1] && middle+1 == arr[middle]){
			left = middle + 1;
		}else if(middle < arr[middle-1]){
			right = middle - 1;
		}else{
			return middle+1;
		}
	}
}