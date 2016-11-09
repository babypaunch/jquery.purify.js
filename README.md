# jquery.purify.js #
* 이번 jquery plugin은 오랫만에 직접 만들었네요 ㅎㅎ;;
* 라이센스 따위 없음. 마음대로 쓰시고 좋은 의견은 남겨주시면 더 좋구요.  

## Install js file ##
* jquery에 종속적인 내용만 다루므로 반드시 jquery 파일의 아래에 jquery.purify.js 파일을 위치시켜야 함.

## Usage ##
* plugin이므로 각 element에 적용해주어야 함.
* jquery.validate.js와 다르게, keydown, keyup시 해당 element의 value에 지정하지 않은 문자열을 모두 제거함.
* 기본적인 masking 기능으로 입력되어 있는 문자열 중간에 새로운 입력을 할 수 없음. 뒤에서부터 지우고 다시 입력 필요함.
* 입력되어 있는 문자열의 중간에 새로운 입력을 하고 싶으면 keydown event를 제거하면 되나 권장하지 않음.

<table>
	<tr>
		<th>Parameter</th>
		<th>Comment</th>
	</tr>
	<tr>
		<td>공통적용</td>
		<td>
			<div>1. 공백은 항상 입력할 수 있게되어 있다.</div>
			<div>2. Parameter 1이 없을 경우 default 값으로 "neEk" 값이 대입된다. 즉, 숫자/대문자/소문자/한글을 입력할 수 있다.</div>
			<div>3. Parameter 2가 없을 경우 default 값으로 "[]" 값이 대입된다. 즉 빈 배열이 대입되어서 특수문자를 입력할 수 없다.</div>
			<div>3. 아래의 Parameter를 조합해서 사용할 수 있다.</div>
		</td>
	</tr>
	<tr>
		<td>flag</td>
		<td>
			<div>* n: 숫자만 입력 가능</div>
			<div>* e: 소문자만 입력 가능</div>
			<div>* E: 대문자만 입력 가능</div>
			<div>* k: 한글만 입력 가능</div>
		</td>
	</tr>
	<tr>
		<td>specials</td>
		<td>
			* 입력하고 싶은 특수문자를 문자열로 배열에 대입한다.
		</td>
	</tr>
</table>

<pre>
/*
* Sample
*/
$("#no").purify("n"); //숫자만 입력 가능

$("#en").purify("e"); //소문자만 입력 가능

$("#EN").purify("E"); //대문자만 입력 가능

$("#ko").purify("k"); //한글만 입력 가능

$("#email").purify("neE", ["@", ".", "_"]); //숫자 + 소문자 + 대문자 + 특수문자(@._) 입력 가능

$("#ip").purify("n", ["."]); //숫자 + 특수문자(.) 입력 가능
</pre>
