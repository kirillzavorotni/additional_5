module.exports = function check(str, bracketsConfig) {
    var strToArr = str.split('');
    var count = 0;
    for(var i = 0; i < bracketsConfig.length; i++){
        var instrItem = bracketsConfig[i];
        Outer2: for(var j = 0; j < instrItem.length; j++){
            var curItemInItem = instrItem[j];
            for(var l = 0; l < strToArr.length; l++){
                var curItemStrArr = strToArr[l];
                if(curItemStrArr === curItemInItem){
                    for(var p = l+1; p < strToArr.length; p++){
                        var nextItem = strToArr[p];
                        var secondItemInItem = instrItem[j+1];
                        if(nextItem === secondItemInItem){
                            if(count === 0) {
                                strToArr.splice(p, 1);
                                strToArr.splice(l, 1);
                                j--;
                                count = 0;
                                continue Outer2;
                            } else if(count !== 0 && count !== 1 && (count % 2)) {
                                if(strToArr[(count*2)+1] === secondItemInItem){
                                    strToArr.splice((count*2)+1, 1);
                                    strToArr.splice(l, 1);
                                    j--;
                                    count = 0;
                                    continue Outer2;
                                }
                            } else if(count === 2) {
                                strToArr.splice((count*2)-1, 1);
                                strToArr.splice(l, 1);
                                j--;
                                count = 0;
                                continue Outer2;
                            } else if(count === 1){
                                strToArr.splice((count*2)+1, 1);
                                strToArr.splice(l, 1);
                                j--;
                                count = 0;
                                continue Outer2;
                            } else {
                                return false;
                            }
                        } else {
                            count++;
                            continue;
                        }
                    }
                } else {
                    continue;
                }

            }
            continue;
        }
    }
    if(!strToArr.length){
        return true;
    } else {
        return false;
    }
}
