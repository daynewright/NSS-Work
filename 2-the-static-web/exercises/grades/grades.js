//How many of each grade?
//What is the lowest grade?
//What is the highest grade?

var letterGrade = function(grade){
	if(grade > 91){
		grade = grade + ' A';
	} else if(grade >= 81 && grade >= 90){
		grade = grade + ' B';
	} else if(grade >=  71 && grade <= 80){
		grade = grade = grade + ' C';
	} else if( grade  >= 61 && grade <= 70) {
		grade = grade + ' D';
	} else {
		grade = grade + ' F';
	}

	return grade;
};

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var highest = Math.max.apply(Math, scores);  //calculate max score
var lowest = Math.min.apply(Math, scores);   //calculate min score
var letterGradeOfEach = scores.sort().map(e => letterGrade(e).slice(-1));  //turns each number grade to letter grade


var result = { };

for(var i = 0; i < letterGradeOfEach.length; ++i) {
    if(!result[letterGradeOfEach[i]]){
        result[letterGradeOfEach[i]] = 0;
    }
    ++result[letterGradeOfEach[i]];
}

console.log('Lowest grade: ' , letterGrade(lowest));
console.log('Highest grade: ' , letterGrade(highest));

console.log('All grades in letter array: ', letterGradeOfEach);
console.log('Number of each letter grades in obj: ',result);
