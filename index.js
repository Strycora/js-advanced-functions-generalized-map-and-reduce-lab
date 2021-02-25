function map(src, fn) {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(fn(src[i])) // Unique work
  }
  return r
}

function reduce(arr, cb, start){
  let r = (!!start) ? start : arr[0]
  let i = (!!start) ? 0 : 1
  for (; i < arr.length ; i++){
    r = cb(arr[i], r)
  }
  return r;
}
