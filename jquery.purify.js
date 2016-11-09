/*
* 개발: 정대규
* 최초: 20161109
*/
$.fn.purify = function(flag, specials){
	var replace = function(f, specials, val){
		var reg = "";
		var $reg = {
			n: "0-9"
			, e: "a-z"
			, E: "A-Z"
			, k: "ㄱ-ㅎㅏ-ㅣ가-힣"
		};
		for(var i = 0; i < flag.length; i++){
			reg += $reg[flag[i]];
		}
		for(var i = 0; i < specials.length; i++){
			reg += "\\" + specials[i];
		}

		return val.replace(new RegExp("[^" + reg + "\\s]"), "");
	} //end: var replace = function(f, specials, val){

	return this.each(function(){
		/*
		* 입력되어 있는 문자열 중간에서 입력을 다시 하고자 하는 경우엔 keydown event를 제거할 것(권장하지 않음.)
		*/
		$(this).on("keydown keyup", function(e){
			$(this).val(replace(flag || "neEk", specials || [], $(this).val()));
		});
	}); //end: return this.each(function(){
} //end: $.fn.purify = function(flag, specials){
