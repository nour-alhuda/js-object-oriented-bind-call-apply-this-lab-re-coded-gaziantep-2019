//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}
function setThisWithApply(fn, thisValue, args){
  const arr = Array.prototype.slice.call(args);
  return fn.apply(thisValue, arr);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue);
} 