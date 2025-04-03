import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from '../Services/graph.service'; 
import { GraphData } from '../Models/Graph'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.css'],
  imports: [CommonModule, FormsModule],
})
export class StepChartComponent implements OnInit {
  
  //view child for accessing the chart
  @ViewChild('chartContainer', { static: true }) private chartContainer!: ElementRef;
  @ViewChild('legendContainer', { static: false }) legendContainer!: ElementRef;

  //dimension & margin
  private margin = { top: 50, right: 20, bottom: 300, left: 160 };
  private width = 1250 - this.margin.left - this.margin.right;
  private height = 750 - this.margin.top - this.margin.bottom;

  //D3 elements
  private svg: any;
  private xScale: any;
  private yScale: any;
  private colorScale: any;
  private tooltip: any;

  //data & config
  private data: GraphData[] = [];
  private keys: string[] = [];
  private columnVisibility: { [key: string]: boolean } = {}; 

  constructor(private graphservice: GraphService) {}

  // 24hr
  startDate: string = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
  endDate: string = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
    this.fetchData();
  }

  onDateChange(): void {
}

public fetchData(): void {
  if (!this.startDate || !this.endDate) {
    console.error("Start or End date is missing!");
    return;
  }

  const start = new Date(`${this.startDate}T00:00:00`); 
  const end = new Date(`${this.endDate}T23:59:59`); 

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error("Invalid date format! Start:", this.startDate, "End:", this.endDate);
    return;
  }

  console.log(`Fetching data from ${start.toISOString()} to ${end.toISOString()}`);

  this.graphservice.getGraphData(start, end).subscribe(
    (response: GraphData[]) => {
      if (response.length > 0) {
        this.data = response;
        this.keys = Object.keys(response[0]).filter(key => key !== 'date');
        this.keys.forEach(key => this.columnVisibility[key] = true);
        this.createChart();
      } else {
        console.warn('No data available for the selected date range.');
      }
    },
    (error) => {
      console.error('Error fetching chart data:', error);
    }
  );
}
  
//create chart and it element
private createChart(): void {
    d3.select(this.chartContainer.nativeElement).select('svg').remove();
    d3.select(this.legendContainer.nativeElement).html(""); 
  
    this.svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
  
    this.xScale = d3.scaleTime()
      .domain(d3.extent(this.data, d => new Date(d.date)) as [Date, Date])
      .range([0, this.width]);
  
    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(this.keys);
    
    this.createCheckboxes();
    this.updateGraph();
}

//creates checkbox
private createCheckboxes(): void {
  const checkboxContainer = document.getElementById("checkboxContainer");
  if (!checkboxContainer) return;

  checkboxContainer.innerHTML = "";

  this.keys.forEach((key) => {
    const label = document.createElement("label");
    label.style.marginRight = "15px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.columnVisibility[key];
    checkbox.dataset["key"] = key;

    checkbox.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      this.columnVisibility[key] = target.checked;
      this.updateGraph();
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(key));
    checkboxContainer.appendChild(label);
  });
}

private updateGraph(): void {
  this.svg.selectAll(".line").remove();
  this.svg.selectAll(".y-axis-text").remove();

  const visibleKeys = this.keys.filter(key => this.columnVisibility[key]);
  if (visibleKeys.length === 0) return; 

  visibleKeys.forEach((key) => {
    const minVal = d3.min(this.data, d => (d as any)[key]) || 0;
    const maxVal = d3.max(this.data, d => (d as any)[key]) || 100;

    this.yScale = d3.scaleLinear().domain([minVal, maxVal]).range([this.height, 0]);

    const line = d3.line()
      .x(d => this.xScale(new Date((d as any).date)))
      .y(d => this.yScale((d as any)[key]))
      .curve(d3.curveStepAfter);

    this.svg.append('path')
      .datum(this.data as any)
      .attr('class', `line line-${key}`)
      .attr('fill', 'none')
      .attr('stroke', this.colorScale(key) as string)
      .attr('stroke-width', 2)
      .attr('d', line);
  });
      
//Tooltip setup
this.tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid black")
    .style("padding", "5px")
    .style("display", "none");

    this.svg.append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(this.xScale).ticks(d3.timeMinute.every(60)));
  
   const yAxis = d3.axisLeft(this.yScale).tickFormat(() => "");
   this.svg.append("g").attr("class", "y-axis").call(yAxis);

// Tooltip
this.tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid black")
    .style("padding", "5px")
    .style("display", "none");

// Compute highest and lowest values for each key (column)
const valueRanges = this.keys.map(key => ({
  key,
  min: d3.min(this.data, d => (d as any)[key]) || 0,
  max: d3.max(this.data, d => (d as any)[key]) || 0
}));

// Sort values to stack them properly
valueRanges.sort((a, b) => b.max - a.max); // Sort highest values in descending order
const lowestValuesSorted = [...valueRanges].sort((a, b) => a.min - b.min); // Sort lowest values in ascending order

// Append highest values stacked on top-left
valueRanges.forEach((d, index) => {
  this.svg.append('text')
    .attr('x', -120) // Align left
    .attr('y', index * 15) // Stack values vertically
    .text(`${d.key}: ${d.max}`)
    .attr('font-size', '12px')
    .attr('fill', this.colorScale(d.key) as string);
});

// Append lowest values stacked on bottom-left
lowestValuesSorted.forEach((d, index) => {
  this.svg.append('text')
    .attr('x', -120)
    .attr('y', this.height - index * 15) // Stack values near bottom
    .text(`${d.key}: ${d.min}`)
    .attr('font-size', '12px')
    .attr('fill', this.colorScale(d.key) as string);
});

//added    
//Chart Title
    this.svg.append("text")
    .attr("x", this.width / 2)
    .attr("y", -30) // Above chart
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight", "bold")
    .text("Gaph 1: Column Distribution on 30'Sept 17 @ 1d 0h 0m 0s");

    //tooltip
    this.svg.on("mousemove", (event) => {
      const [x, y] = d3.pointer(event);
      const time = this.xScale.invert(x);

      //find near data point
      const nearestData = this.data.reduce((prev, curr) =>
        Math.abs(new Date(curr.date).getTime() - time.getTime()) < Math.abs(new Date(prev.date).getTime() - time.getTime()) ? curr : prev);

        // Get all visible keys (columns) dynamically based on checkbox visibility
        const visibleKeys = this.keys.filter(key => this.columnVisibility[key]);

  // Prepare the tooltip content dynamically based on the hovered point
  let tooltipContent = `Time: ${d3.timeFormat("%H:%M:%S")(new Date(nearestData.date))}<br>`;
  
  // Loop through each visible column and get the value at this time
  visibleKeys.forEach((key) => {
    tooltipContent += `${key}: ${nearestData[key]}<br>`;
  });

      this.tooltip.style("left", event.pageX + "px")
        .style("top", event.pageY - 20 + "px")
        .style("display", "block")

        .html(`Time: ${d3.timeFormat("%H:%M:%S")(new Date(nearestData.date))}<br>Value: ${nearestData[this.keys[0]]}`);
    }).on("mouseleave", () => this.tooltip.style("display", "none"));

//legends palcing
    const legend = this.svg.append('g')
  .attr('transform', `translate(${this.width - 1060}, ${this.height + 35})`); // Position below x-axis

this.keys.forEach((key, index) => {
  legend.append('rect')
    .attr('x', 0)
    .attr('y', index * 20) // Stack legends vertically
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', this.colorScale(key) as string);

  legend.append('text')
    .attr('x', 15)
    .attr('y', index * 20 + 10) // Align text properly
    .text(key)
    .attr('font-size', '12px')
    .attr('alignment-baseline', 'middle');
});
}

private findNearestData(time: Date): any {
  return this.data.reduce((prev, curr) =>
    Math.abs(new Date(curr.date).getTime() - time.getTime()) < Math.abs(new Date(prev.date).getTime() - time.getTime()) ? curr : prev
  );
}

//download grah
downloadGraph(): void {
 const svgElement = document.querySelector("svg");
 if (!svgElement) return;

 const serializer = new XMLSerializer();
 const svgString = serializer.serializeToString(svgElement);

 const canvas = document.createElement("canvas");
 const ctx = canvas.getContext("2d");
 const img = new Image();

 img.onload = () => {
   canvas.width = svgElement.clientWidth;
   canvas.height = svgElement.clientHeight;
   if (ctx) {
    // Fill background with white before drawing the graph
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the graph on top
    ctx.drawImage(img, 0, 0);

    // Convert to PNG and trigger download
    canvas.toBlob((blob) => {
      if (blob) {
        const link = document.createElement("a");
        link.download = `graph_snapshot_${new Date().toISOString()}.png`;
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
      }
    }, "image/png");
  }
};

img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgString)));
}
}