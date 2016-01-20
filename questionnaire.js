// 调查问卷填写 在问卷页面按F12后粘贴到Console中运行
var input = {
	'ques02_1':'10',
	'ques02_3':'1',
	'ques03_1':'14',
	'ques03_2':'19',
	'ques03_3':'13',
	'ques04_2':'62',
	'ques06_2':'20'
};
var select = [
	'ques01_11',
	'ques04_12',
	'ques05_13',
	'ques05_14',
	'ques06_14',
	'ques07_12',
	'ques08_16'
];

for (key in input){
	$('#'+key).val(input[key]);
}

for (key in ques){
	$('#'+ques[key]).attr("checked", "checked");
}
