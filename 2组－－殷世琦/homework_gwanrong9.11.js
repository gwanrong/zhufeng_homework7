/**
 * Created by gwanrong on 2016/9/11 0011.
 */
Buffer.myConcat = function (list, length) {
    if (typeof length == "undefined") {
        length = 0;
        list.forEach(function (item) {
            if (item.constructor == Buffer) {
                length += item.length;
            }
        });
    }
    var result = new Buffer(length),
        curOffset = 0;
    list.forEach(function (item) {
        if (item.constructor == Buffer) {
            item.copy(result, curOffset, 0, item.length);
            curOffset += item.length;
        }
    });

    return result.slice(0,curOffset);
};