var SmartLinkedStateMixin = {

    nestObject: function (object, stateArr) {
        var length = stateArr.length;


        function set(source, stateArr, index, value, type) {
            var next;
            var newOb = {};
            if ($.isNumeric(stateArr[index])) {
                newOb = [];
            }
            if (index == stateArr.length - 1) {
                switch (type) {
                    case 'push':
                    case 'splice':
                        (new Array())[type].apply(source[stateArr[index]], value);
                        newOb = source;
                        break;
                    default:
                        next = value;
                        newOb[stateArr[index]] = next;
                        newOb = $.extend(source, newOb)
                }

            } else {
                var defaultValue = {};
                if ($.isNumeric(stateArr[index])) {
                    defaultValue = [];
                }
                next = set(source[stateArr[index]] || defaultValue, stateArr, index + 1, value, type);
                newOb[stateArr[index]] = next;
                newOb = $.extend(source, newOb)
            }
            return newOb;
        }

        function get(source, stateArr, index) {

            var rs = source[stateArr[index]];

            if (rs) {
                if (index != stateArr.length - 1) {
                    rs = get(rs, stateArr, index + 1);
                }
            } else {
                rs = null;
            }


            return rs;
        }


        return {
            getValue: function () {
                return get(object, stateArr, 0);
            },
            setValue: function (value) {
                return set(object, stateArr, 0, value);
            },
            arrPush: function () {
                return set(object, stateArr, 0, arguments, 'push');
            },
            arrSplice: function () {
                return set(object, stateArr, 0, arguments, 'splice');
            }
        }
    },
    nestLinkedState: function (stateArr, context) {
        if (!context) {
            context = this;
        }

        var targetState;
        var length = stateArr.length;
        var newState = context.state;


        targetState = SmartLinkedStateMixin.nestObject(newState, stateArr).getValue();

        return {
            value: targetState,
            requestChange: function (newValue) {
                newState = SmartLinkedStateMixin.nestObject(newState, stateArr).setValue(newValue);
                context.setState(newState);
            }
        }
    }
};
module.exports = SmartLinkedStateMixin;