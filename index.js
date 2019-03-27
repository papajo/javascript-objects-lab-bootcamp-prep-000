var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
   var newObj = {[key]: value}
   recipes = Object.assign(recipes, obj, newObj)
   return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign(obj[key])
   
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}