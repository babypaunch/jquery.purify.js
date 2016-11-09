# jquery.purify.js #
* 이번 jquery plugin은 오랫만에 직접 만들었네요 ㅎㅎ;;
* 라이센스 따위 없음. 마음대로 쓰시고 좋은 의견은 남겨주시면 더 좋구요.  

## Install js file ##
* jquery에 종속적인 내용만 다루므로 반드시 jquery 파일의 아래에 jquery.purify.js 파일을 위치시켜야 함.

## Usage ##
* plugin이므로 각 element에 적용해주어야 함.
* jquery.validate.js와 다르게, onkeyup시 해당 element의 value에 지정하지 않은 문자열을 모두 제거함.
* onkeyup시 동작되므로 타이핑되는 문자열이 보일 수 있음. 이는 한글처리를 정확히 하기위해서 onkeyup event를 이용해야만 하므로 어쩔 수 없음.

<table>
	<tr>
		<th>Parameter</th>
		<th>Comment</th>
	</tr>
	<tr>
		<td>공통적용</td>
		<td>
			1. 공백은 항상 입력할 수 있게되어 있다.
			2. Parameter가 없을 경우 default 값으로 "neEk" 값이 대입된다. 즉, 숫자/대문자/소문자/한글을 입력할 수 있다.
			3. 아래의 Parameter를 조합해서 사용할 수 있다.
		</td>
	</tr>
	<tr>
		<td>n</td>
		<td>숫자만 입력할 수 있다.</td>
	</tr>
	<tr>
		<td>e</td>
		<td>소문자만 입력할 수 있다.</td>
	</tr>
	<tr>
		<td>E</td>
		<td>대문자만 입력할 수 있다.</td>
	</tr>
	<tr>
		<td>k</td>
		<td>한글만 입력할 수 있다.</td>
	</tr>
	<tr>
		<td>s</td>
		<td>키보드에 존재하는 모든 특수문자를 입력할 수 있다.</td>
	</tr>
</table>

<pre>
//Sample
$("input").purify("eE"); //소문자/대문자만 입력할 수 있다.
</pre>