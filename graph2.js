svg = d3.select("svg");
g = svg.append("g");
g.attr("transform", "translate(100,50)");

x = d3.scale.linear()
    .domain([2000, 2012])  // Fill in the domain values for the x axis
    .range([0, 800]);
y = d3.scale.linear()
    .domain([0, 70])  // Fill in the domain values for the y axis
    .range([0, 400]);

x_axis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.format("d"));
y_axis = d3.svg.axis().scale(y).orient("left").ticks(4);

g.call(y_axis);

gx = g.append("g")
gx.call(x_axis);
gx.attr("transform", "translate(0,400)");

// Okay, now all of your axes are set up.  Add code to draw points here.

g.append("circle").attr("cx", x(2004)).attr("cy", y(2)).attr("r", 5); //Fill in the parens and add stuff after the last dot, then make more of these lines.
// You need to make one line for each circle doing it this way.
