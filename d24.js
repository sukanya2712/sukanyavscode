<html>
    <head>
    <script>
    function mincost(arr) {
  arr.sort((a, b) => a-b)// write your code here
  let cost = 0
  while (arr.length>1) {
    let first = arr.shift();
    let seacond = arr.shift();

    cost += first + seacond

    arr.push(first + seacond);
    arr.sort((a, b)=>a-b)
  }
  return cost
}

let arr = [4,3,2,6]
console.log(mincost(arr))

</script>
    </head>
    <body>

    </body>
    </html>
    