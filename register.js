// 注册页面信息填写 按F12后粘贴到Console中运行
var info = {
	'xing':'王',		// 姓(中文)
	'ming':'哈哈',		// 名(中文)
	'nachname':'WANG',		// 姓(英文/全拼)
	'vorname':'HAHA',		// 名(英文/全拼)
	'birthYear':'1993',		// 出生年
	'birthMonth':'9',		// 出生月
	'birthDay':'3',		// 出生日
	'tdokumentNummer':'15062319930903****',		// 证件号
	'password':'123456',		// 登录密码
	'rePassword':'123456',		// 再次输入登录密码
	'remind':'您的昵称是？',		// 找回密码提示问题
	//可选这些问题'您的昵称是？''您上的第一座学校的名字是什么？''您孩提时的偶像是谁？''您是哪支球队的球迷？'
	'remindAnswer':'哈哈',		// 找回密码问题答案
	'address':'浙江省杭州市余杭区文一西路1000号',		// 通讯地址(中文)
	'strasseHausNr':'ZheJiang Sheng HangZhou Shi YuHang Qu WenYiXiLu 1000 Hao',		// 通讯地址(英文/全拼)(请填写时不要使用标点符号)
	'postleitzahl':'710028',		// 邮编
	'qh':'029',		// 有效的日间联系电话的区号
	'tel1':'88888888',		// 有效的日间联系电话的号码
	'telNumber':'13012341234',		// 手机号码
	'email':'123456@163.com',		// 电子邮箱
	'selectGj':'China',		// 国籍
	'selectland':'China',		// 居住国家
	'provinz':'SHAANXI',		// 居住省份全拼大写
	'wohnort':'XIAN'		// 居住城市全拼大写
};

var info2 = {
	'Geschlecht':'geschlecht1',		// 性别：男'geschlecht1' 女'geschlecht2'
	'Dokuments':'typDesDokuments1',		// 证件类型：身份证'typDesDokuments1' 台湾居民'typDesDokuments2' 护照'typDesDokuments3'
	'guarantee':'guarantee'		// 我保证以上信息是真实和准确的
};

for (key in info){
	$('#'+key).val(info[key]);
}

for (key in info2){
	$('#'+info2[key]).attr("checked", "checked");
}
