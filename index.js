// Write your solution in this file!
function updateDriverWithKeyAndValue(obj, key, value) {
  Object.assign({}, obj, { [key]: value) });
}