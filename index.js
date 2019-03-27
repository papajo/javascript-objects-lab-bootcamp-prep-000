var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
   var newObj = {[key]: value}
   recipes = Object.assign(recipes, obj, newObj)
   return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
   obj = Object.assign(obj, {[key]: value})
   return obj 
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}