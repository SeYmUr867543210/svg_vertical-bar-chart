let date = new Date();

let data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        height: parseInt(Math.random() * 100),
        date: `${date.getHours()}/${date.getMinutes()}/${date.getSeconds()}`
    })
}

let maxBarHeight = Math.max(...data.map(function (item, idx,) {
    return item.height
}))

// let svg = document.createElement("svg");
// let svgWidth = svg.getAttribute("width", svg.setAttribute("width",500))
// let svgHeight = svg.getAttribute("height", svg.setAttribute("height",500))
// document.body.append(svg)
let svg = document.querySelector("svg")
let svgHeight = svg.getAttribute("height")
let svgWidth = svg.getAttribute("width")

for (let i = 0; i < data.length; i++) {
    let margin = {left: 3, right: 3, top: 10, bottom: 3}
    let barWidth = svgWidth / data.length - margin.left;                          // xScale
    let barHeight = svgHeight / maxBarHeight * data[i].height - margin.top;       // yScale


    svg.innerHTML +=

        `  <g class="verticBar">
                 <rect width="${barWidth}"height="${barHeight}"x="${i * (barWidth + margin.left)}"y="${svgHeight - barHeight}"rx="30"ry="25"/>
                 <text x="${i * (barWidth + margin.left)}"y="${svgHeight - barHeight}">${data[i].date}</text>
           </g>`
}
