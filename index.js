// Write your solution in this file!
const driver = {something: 'bob'};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value) });
}
