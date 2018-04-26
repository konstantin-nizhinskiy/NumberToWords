/**
 * Convert month to words
 *
 * @param num {string} - number
 * @param intStr {object} - translations locale
 * @return {string}
 */
var _getDateMonth=function(num,intStr){
    return intStr.month[parseInt(num)-1]||num;
};
