var scale = d3.scale.linear().domain([2000, 2012]).range([50, 950]);
You can put this on more than one line to make it easier to read:
var scale = d3.scale.linear()
  .domain([2000, 2012])
  .range([50, 950]);

var axis = d3.svg.axis()
  .scale(scale)
  .orient("bottom")
  .ticks(13);
  .tickFormat(d3.format("d")); makes it in year format(2000 instead of 2,000)

var g = d3.select("g");

g.call(axis); This executes axis INSIDE group tag. Nothing will show up unless you have this line. 

g.append("circle").attr("cx", scale(2005)).attr("r", 5);


















// Atom plea
