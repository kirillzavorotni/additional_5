module.exports = function check(str, bracketsConfig) {
    var openBrackets = [];
    for(var i = 0; i < str.length; i++){
        var strElem = str[i];
        for(var j = 0; j < bracketsConfig.length; j++){
            var bracketsConfigElem = bracketsConfig[j];

            if(strElem === bracketsConfigElem[0] &&
                bracketsConfigElem[0] === bracketsConfigElem[1] &&
                bracketsConfigElem[0] === openBrackets[openBrackets.length - 1]){
                openBrackets.pop();
                break;
            }

            if(strElem === bracketsConfigElem[0]){
                if(!str[i+1]){
                    return false;
                }
                openBrackets.push(strElem);
                break;
            }

            if(strElem === bracketsConfigElem[1]){
                if(bracketsConfigElem[0] !== openBrackets.pop()){
                    return false;
                }
            }

        }
    }
    return true;
};
