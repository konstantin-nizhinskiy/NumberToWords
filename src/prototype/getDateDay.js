/**
 * Thousand days to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
var _getDateDay=function(num,intStr,type){
    return intStr.days[type][parseInt(num)-1]||num;
};
