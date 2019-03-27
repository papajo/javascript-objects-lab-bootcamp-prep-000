var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
   var newObj = {[key]: value}
   recipes = Object.assign(recipes, obj, newObj)
   return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}