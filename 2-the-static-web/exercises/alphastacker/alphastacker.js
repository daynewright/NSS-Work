const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let stackLetter = function(letters){
	letters.forEach(function(v,i){
		if(i % 5 === 0 && i !== 0){
			letters.splice(i, 0, " ");
		}
	});

	let letterString = letters.join('');

	for(let i = letters.length; i >= 0; i--){
		console.log(letterString.slice(0,-i));
	}
};

stackLetter(letters);
