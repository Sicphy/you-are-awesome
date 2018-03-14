// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (a) => { if(typeof(a) === 'object') Object.defineProperty(a, 'x', {
    value: 45, enumerable : true
})};
const createNotEnumerableProperty = (a) => {if(typeof(a) === 'object') Object.defineProperty(this, 'a', {
    value: 45, enumerable : false, writable : false, configurable : false
});};
const createProtoMagicObject = () => {};
const incrementor = (a) => { if(a && typeof(a) === 'number') return ++a; };
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (a) => {setTimeout(function wait() {
    return a;
}, 1000)};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;