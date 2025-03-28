//import comp for D3 and ref for plotting data
// import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import * as d3 from 'd3';

// @Component({
//   selector: 'app-step-chart',
//   standalone: true,
//   templateUrl: './step-chart.component.html',
//   styleUrls: ['./step-chart.component.css']
// })
// export class StepChartComponent implements OnInit, AfterViewInit {
//   //dummy data set 
//   private data: 
//     { time: Date; AI34111BPV: number; AI34111CPV: number; AI34111DPV: number; AI34722PV: number; FC34115PV: number, FC34116PV: number }[] = [
    
// { time: new Date('9/30/2017 0:00'), AI34111BPV:  65.09 , AI34111CPV: 22.85 , AI34111DPV: 11.02 , AI34722PV: 20.86 , FC34115PV: 306.97 , FC34116PV: 137.37 }, 
// { time: new Date('9/30/2017 0:10'), AI34111BPV:  65.18 , AI34111CPV: 22.81 , AI34111DPV: 10.97 , AI34722PV: 20.86 , FC34115PV: 305.2 , FC34116PV: 136.88 }, 
// { time: new Date('9/30/2017 0:20'), AI34111BPV:  65.41 , AI34111CPV: 22.76 , AI34111DPV: 10.93 , AI34722PV: 20.86 , FC34115PV: 304.89 , FC34116PV: 135.75 }, 
// { time: new Date('9/30/2017 0:30'), AI34111BPV:  66.03 , AI34111CPV: 22.72 , AI34111DPV: 10.92 , AI34722PV: 20.86 , FC34115PV: 305.91 , FC34116PV: 136.03 }, 
// { time: new Date('9/30/2017 0:40'), AI34111BPV:  66.5 , AI34111CPV: 22.67 , AI34111DPV: 10.91 , AI34722PV: 20.86 , FC34115PV: 301.71 , FC34116PV: 135.85 }, 
// { time: new Date('9/30/2017 0:50'), AI34111BPV:  66.58 , AI34111CPV: 22.63 , AI34111DPV: 10.9 , AI34722PV: 20.86 , FC34115PV: 305.52 , FC34116PV: 136.24 }, 
// { time: new Date('9/30/2017 1:00'), AI34111BPV:  66.66 , AI34111CPV: 22.59 , AI34111DPV: 10.89 , AI34722PV: 20.86 , FC34115PV: 304.25 , FC34116PV: 137.42 }, 
// { time: new Date('9/30/2017 1:10'), AI34111BPV:  66.74 , AI34111CPV: 22.54 , AI34111DPV: 10.88 , AI34722PV: 20.86 , FC34115PV: 306.56 , FC34116PV: 137.45 }, 
// { time: new Date('9/30/2017 1:20'), AI34111BPV:  66.82 , AI34111CPV: 22.5 , AI34111DPV: 10.87 , AI34722PV: 20.86 , FC34115PV: 304.11 , FC34116PV: 137.49 }, 
// { time: new Date('9/30/2017 1:30'), AI34111BPV:  66.93 , AI34111CPV: 22.45 , AI34111DPV: 10.86 , AI34722PV: 20.86 , FC34115PV: 308.38 , FC34116PV: 137.53 }, 
// { time: new Date('9/30/2017 1:40'), AI34111BPV:  67.12 , AI34111CPV: 22.41 , AI34111DPV: 10.85 , AI34722PV: 20.87 , FC34115PV: 305.11 , FC34116PV: 137.57 }, 
// { time: new Date('9/30/2017 1:50'), AI34111BPV:  67.31 , AI34111CPV: 22.36 , AI34111DPV: 10.85 , AI34722PV: 20.87 , FC34115PV: 304.54 , FC34116PV: 137.61 }, 
// { time: new Date('9/30/2017 2:00'), AI34111BPV:  67.53 , AI34111CPV: 22.32 , AI34111DPV: 10.84 , AI34722PV: 20.87 , FC34115PV: 303.86 , FC34116PV: 138.51 }, 
// { time: new Date('9/30/2017 2:10'), AI34111BPV:  67.83 , AI34111CPV: 22.28 , AI34111DPV: 10.83 , AI34722PV: 20.87 , FC34115PV: 307.82 , FC34116PV: 138.5 }, 
// { time: new Date('9/30/2017 2:20'), AI34111BPV:  68.16 , AI34111CPV: 22.23 , AI34111DPV: 10.76 , AI34722PV: 20.87 , FC34115PV: 303.96 , FC34116PV: 138.49 }, 
// { time: new Date('9/30/2017 2:30'), AI34111BPV:  68.57 , AI34111CPV: 22.19 , AI34111DPV: 10.52 , AI34722PV: 20.87 , FC34115PV: 306.13 , FC34116PV: 138.48 }, 
// { time: new Date('9/30/2017 2:40'), AI34111BPV:  68.98 , AI34111CPV: 22.14 , AI34111DPV: 10.28 , AI34722PV: 20.87 , FC34115PV: 308.98 , FC34116PV: 138.47 }, 
// { time: new Date('9/30/2017 2:50'), AI34111BPV:  69.34 , AI34111CPV: 22.1 , AI34111DPV: 10.16 , AI34722PV: 20.87 , FC34115PV: 303.17 , FC34116PV: 138.69 }, 
// { time: new Date('9/30/2017 3:00'), AI34111BPV:  69.58 , AI34111CPV: 22.06 , AI34111DPV: 10.36 , AI34722PV: 20.87 , FC34115PV: 305.69 , FC34116PV: 139.51 }, 
// { time: new Date('9/30/2017 3:10'), AI34111BPV:  69.76 , AI34111CPV: 22.01 , AI34111DPV: 10.45 , AI34722PV: 20.87 , FC34115PV: 303.84 , FC34116PV: 140.16 }, 
// { time: new Date('9/30/2017 3:20'), AI34111BPV:  69.79 , AI34111CPV: 21.97 , AI34111DPV: 10.25 , AI34722PV: 20.87 , FC34115PV: 303.66 , FC34116PV: 138.73 }, 
// { time: new Date('9/30/2017 3:30'), AI34111BPV:  69.82 , AI34111CPV: 21.92 , AI34111DPV: 10.04 , AI34722PV: 20.88 , FC34115PV: 304.24 , FC34116PV: 139.29 }, 
// { time: new Date('9/30/2017 3:40'), AI34111BPV:  70 , AI34111CPV: 21.88 , AI34111DPV: 9.84 , AI34722PV: 20.88 , FC34115PV: 302.97 , FC34116PV: 139.57 }, 
// { time: new Date('9/30/2017 3:50'), AI34111BPV:  70.57 , AI34111CPV: 21.83 , AI34111DPV: 9.63 , AI34722PV: 20.88 , FC34115PV: 305.88 , FC34116PV: 139.87 }, 
// { time: new Date('9/30/2017 4:00'), AI34111BPV:  70.94 , AI34111CPV: 21.8 , AI34111DPV: 9.48 , AI34722PV: 20.88 , FC34115PV: 301.16 , FC34116PV: 138.4 }, 
// { time: new Date('9/30/2017 4:10'), AI34111BPV:  70.74 , AI34111CPV: 21.8 , AI34111DPV: 9.49 , AI34722PV: 20.88 , FC34115PV: 304.12 , FC34116PV: 136.93 }, 
// { time: new Date('9/30/2017 4:20'), AI34111BPV:  70.54 , AI34111CPV: 21.8 , AI34111DPV: 9.5 , AI34722PV: 20.88 , FC34115PV: 302.69 , FC34116PV: 136.9 }, 
// { time: new Date('9/30/2017 4:30'), AI34111BPV:  70.37 , AI34111CPV: 21.8 , AI34111DPV: 9.5 , AI34722PV: 20.88 , FC34115PV: 308.44 , FC34116PV: 136.87 }, 
// { time: new Date('9/30/2017 4:40'), AI34111BPV:  70.28 , AI34111CPV: 21.8 , AI34111DPV: 9.51 , AI34722PV: 20.88 , FC34115PV: 306.1 , FC34116PV: 140.21 }, 
// { time: new Date('9/30/2017 4:50'), AI34111BPV:  70.19 , AI34111CPV: 21.8 , AI34111DPV: 9.51 , AI34722PV: 20.88 , FC34115PV: 306.29 , FC34116PV: 144.97 }, 
// { time: new Date('9/30/2017 5:00'), AI34111BPV:  70.1 , AI34111CPV: 21.8 , AI34111DPV: 9.47 , AI34722PV: 20.88 , FC34115PV: 307.33 , FC34116PV: 144.74 }, 
// { time: new Date('9/30/2017 5:10'), AI34111BPV:  70.01 , AI34111CPV: 21.8 , AI34111DPV: 9.43 , AI34722PV: 20.88 , FC34115PV: 304.18 , FC34116PV: 145.1 }, 
// { time: new Date('9/30/2017 5:20'), AI34111BPV:  69.85 , AI34111CPV: 21.8 , AI34111DPV: 9.48 , AI34722PV: 20.89 , FC34115PV: 304.79 , FC34116PV: 145.62 }, 
// { time: new Date('9/30/2017 5:30'), AI34111BPV:  69.5 , AI34111CPV: 21.8 , AI34111DPV: 9.8 , AI34722PV: 20.89 , FC34115PV: 306.66 , FC34116PV: 147.16 }, 
// { time: new Date('9/30/2017 5:40'), AI34111BPV:  69.24 , AI34111CPV: 21.8 , AI34111DPV: 10.05 , AI34722PV: 20.89 , FC34115PV: 304.45 , FC34116PV: 147.52 }, 
// { time: new Date('9/30/2017 5:50'), AI34111BPV:  69.24 , AI34111CPV: 21.79 , AI34111DPV: 10.11 , AI34722PV: 20.89 , FC34115PV: 305.11 , FC34116PV: 147.89 }, 
// { time: new Date('9/30/2017 6:00'), AI34111BPV:  69.24 , AI34111CPV: 21.79 , AI34111DPV: 10.18 , AI34722PV: 20.89 , FC34115PV: 303.98 , FC34116PV: 146.99 }, 
// { time: new Date('9/30/2017 6:10'), AI34111BPV:  69.25 , AI34111CPV: 21.79 , AI34111DPV: 10.24 , AI34722PV: 20.89 , FC34115PV: 304.35 , FC34116PV: 147.6 }, 
// { time: new Date('9/30/2017 6:20'), AI34111BPV:  69.25 , AI34111CPV: 21.79 , AI34111DPV: 10.3 , AI34722PV: 20.89 , FC34115PV: 305.85 , FC34116PV: 147.38 }, 
// { time: new Date('9/30/2017 6:30'), AI34111BPV:  69.25 , AI34111CPV: 21.81 , AI34111DPV: 10.37 , AI34722PV: 20.89 , FC34115PV: 306.4 , FC34116PV: 147.24 }, 
// { time: new Date('9/30/2017 6:40'), AI34111BPV:  69.26 , AI34111CPV: 21.86 , AI34111DPV: 10.43 , AI34722PV: 20.89 , FC34115PV: 306.92 , FC34116PV: 147.1 }, 
// { time: new Date('9/30/2017 6:50'), AI34111BPV:  69.26 , AI34111CPV: 21.92 , AI34111DPV: 10.5 , AI34722PV: 20.89 , FC34115PV: 305.03 , FC34116PV: 146.96 }, 
// { time: new Date('9/30/2017 7:00'), AI34111BPV:  69.26 , AI34111CPV: 21.98 , AI34111DPV: 10.48 , AI34722PV: 20.89 , FC34115PV: 308.74 , FC34116PV: 146.24 }, 
// { time: new Date('9/30/2017 7:10'), AI34111BPV:  69.26 , AI34111CPV: 22.03 , AI34111DPV: 10.23 , AI34722PV: 20.89 , FC34115PV: 305.36 , FC34116PV: 145.89 }, 
// { time: new Date('9/30/2017 7:20'), AI34111BPV:  69.19 , AI34111CPV: 22.09 , AI34111DPV: 10.07 , AI34722PV: 20.89 , FC34115PV: 304.63 , FC34116PV: 145.69 }, 
// { time: new Date('9/30/2017 7:30'), AI34111BPV:  68.9 , AI34111CPV: 22.15 , AI34111DPV: 10.18 , AI34722PV: 20.89 , FC34115PV: 306.31 , FC34116PV: 145.48 }, 
// { time: new Date('9/30/2017 7:40'), AI34111BPV:  68.6 , AI34111CPV: 22.2 , AI34111DPV: 10.28 , AI34722PV: 20.9 , FC34115PV: 299.95 , FC34116PV: 145.28 }, 
// { time: new Date('9/30/2017 7:50'), AI34111BPV:  68.3 , AI34111CPV: 22.26 , AI34111DPV: 10.39 , AI34722PV: 20.9 , FC34115PV: 304.98 , FC34116PV: 144.38 }, 
// { time: new Date('9/30/2017 8:00'), AI34111BPV:  67.95 , AI34111CPV: 22.32 , AI34111DPV: 10.49 , AI34722PV: 20.9 , FC34115PV: 305.79 , FC34116PV: 144.25 }, 
// { time: new Date('9/30/2017 8:10'), AI34111BPV:  67.53 , AI34111CPV: 22.37 , AI34111DPV: 10.6 , AI34722PV: 20.9 , FC34115PV: 306.5 , FC34116PV: 144.12 }, 
// { time: new Date('9/30/2017 8:20'), AI34111BPV:  66.91 , AI34111CPV: 22.43 , AI34111DPV: 10.71 , AI34722PV: 20.9 , FC34115PV: 303.92 , FC34116PV: 143.99 }, 
// { time: new Date('9/30/2017 8:30'), AI34111BPV:  66.29 , AI34111CPV: 22.49 , AI34111DPV: 10.81 , AI34722PV: 20.9 , FC34115PV: 303.57 , FC34116PV: 143.86 }, 
// { time: new Date('9/30/2017 8:40'), AI34111BPV:  65.74 , AI34111CPV: 22.54 , AI34111DPV: 10.94 , AI34722PV: 20.9 , FC34115PV: 304.23 , FC34116PV: 142.58 }, 
// { time: new Date('9/30/2017 8:50'), AI34111BPV:  65.37 , AI34111CPV: 22.6 , AI34111DPV: 11.11 , AI34722PV: 20.9 , FC34115PV: 304.27 , FC34116PV: 142.23 }, 
// { time: new Date('9/30/2017 9:00'), AI34111BPV:  64.98 , AI34111CPV: 22.66 , AI34111DPV: 11.18 , AI34722PV: 20.9 , FC34115PV: 304.79 , FC34116PV: 141.88 }, 
// { time: new Date('9/30/2017 9:10'), AI34111BPV:  64.56 , AI34111CPV: 22.72 , AI34111DPV: 10.95 , AI34722PV: 20.9 , FC34115PV: 302.4 , FC34116PV: 140.77 }, 
// { time: new Date('9/30/2017 9:20'), AI34111BPV:  64.13 , AI34111CPV: 22.77 , AI34111DPV: 10.72 , AI34722PV: 20.91 , FC34115PV: 302.25 , FC34116PV: 140.01 }, 
// { time: new Date('9/30/2017 9:30'), AI34111BPV:  63.74 , AI34111CPV: 22.83 , AI34111DPV: 10.61 , AI34722PV: 20.91 , FC34115PV: 308.32 , FC34116PV: 140.16 }, 
// { time: new Date('9/30/2017 9:40'), AI34111BPV:  63.44 , AI34111CPV: 22.89 , AI34111DPV: 10.83 , AI34722PV: 20.91 , FC34115PV: 306.71 , FC34116PV: 138.54 }, 
// { time: new Date('9/30/2017 9:50'), AI34111BPV:  63.24 , AI34111CPV: 22.87 , AI34111DPV: 10.96 , AI34722PV: 20.91 , FC34115PV: 303.61 , FC34116PV: 137.92 }, 
// { time: new Date('9/30/2017 10:00'), AI34111BPV:  63.32 , AI34111CPV: 22.64 , AI34111DPV: 10.85 , AI34722PV: 20.91 , FC34115PV: 305.94 , FC34116PV: 135.82 }, 
// { time: new Date('9/30/2017 10:10'), AI34111BPV:  63.4 , AI34111CPV: 22.41 , AI34111DPV: 10.74 , AI34722PV: 20.91 , FC34115PV: 303.16 , FC34116PV: 135.01 }, 
// { time: new Date('9/30/2017 10:20'), AI34111BPV:  63.54 , AI34111CPV: 22.25 , AI34111DPV: 10.62 , AI34722PV: 20.91 , FC34115PV: 303.39 , FC34116PV: 134.58 }, 
// { time: new Date('9/30/2017 10:30'), AI34111BPV:  63.87 , AI34111CPV: 22.28 , AI34111DPV: 10.51 , AI34722PV: 20.91 , FC34115PV: 304.43 , FC34116PV: 133.48 }, 
// { time: new Date('9/30/2017 10:40'), AI34111BPV:  64.04 , AI34111CPV: 22.3 , AI34111DPV: 10.48 , AI34722PV: 20.91 , FC34115PV: 307.95 , FC34116PV: 133.3 }, 
// { time: new Date('9/30/2017 10:50'), AI34111BPV:  63.8 , AI34111CPV: 22.32 , AI34111DPV: 10.68 , AI34722PV: 20.91 , FC34115PV: 301.87 , FC34116PV: 131.92 }, 
// { time: new Date('9/30/2017 11:00'), AI34111BPV:  63.56 , AI34111CPV: 22.35 , AI34111DPV: 10.87 , AI34722PV: 20.91 , FC34115PV: 309.03 , FC34116PV: 131.68 }, 
// { time: new Date('9/30/2017 11:10'), AI34111BPV:  63.39 , AI34111CPV: 22.37 , AI34111DPV: 10.97 , AI34722PV: 20.92 , FC34115PV: 305.73 , FC34116PV: 130.49 }, 
// { time: new Date('9/30/2017 11:20'), AI34111BPV:  63.39 , AI34111CPV: 22.39 , AI34111DPV: 10.77 , AI34722PV: 20.92 , FC34115PV: 303.14 , FC34116PV: 129.48 }, 
// { time: new Date('9/30/2017 11:30'), AI34111BPV:  63.39 , AI34111CPV: 22.41 , AI34111DPV: 10.62 , AI34722PV: 20.92 , FC34115PV: 307.47 , FC34116PV: 128.97 }, 
// { time: new Date('9/30/2017 11:40'), AI34111BPV:  63.39 , AI34111CPV: 22.44 , AI34111DPV: 10.61 , AI34722PV: 20.92 , FC34115PV: 307.21 , FC34116PV: 129.13 }, 
// { time: new Date('9/30/2017 11:50'), AI34111BPV:  63.39 , AI34111CPV: 22.46 , AI34111DPV: 10.6 , AI34722PV: 20.92 , FC34115PV: 305.03 , FC34116PV: 129.29 }, 
// { time: new Date('9/30/2017 12:00'), AI34111BPV:  63.39 , AI34111CPV: 22.48 , AI34111DPV: 10.59 , AI34722PV: 20.92 , FC34115PV: 300.42 , FC34116PV: 129.44 }, 
// { time: new Date('9/30/2017 12:10'), AI34111BPV:  63.39 , AI34111CPV: 22.51 , AI34111DPV: 10.58 , AI34722PV: 20.92 , FC34115PV: 303.84 , FC34116PV: 130.86 }, 
// { time: new Date('9/30/2017 12:20'), AI34111BPV:  63.39 , AI34111CPV: 22.53 , AI34111DPV: 10.58 , AI34722PV: 20.92 , FC34115PV: 304.84 , FC34116PV: 131.44 }, 
// { time: new Date('9/30/2017 12:30'), AI34111BPV:  63.39 , AI34111CPV: 22.55 , AI34111DPV: 10.57 , AI34722PV: 20.92 , FC34115PV: 304.39 , FC34116PV: 132.42 }, 
// { time: new Date('9/30/2017 12:40'), AI34111BPV:  63.39 , AI34111CPV: 22.58 , AI34111DPV: 10.56 , AI34722PV: 20.92 , FC34115PV: 307.34 , FC34116PV: 132.81 }, 
// { time: new Date('9/30/2017 12:50'), AI34111BPV:  63.39 , AI34111CPV: 22.6 , AI34111DPV: 10.59 , AI34722PV: 20.92 , FC34115PV: 305.99 , FC34116PV: 133.63 }, 
// { time: new Date('9/30/2017 13:00'), AI34111BPV:  63.4 , AI34111CPV: 22.62 , AI34111DPV: 10.74 , AI34722PV: 20.93 , FC34115PV: 303.55 , FC34116PV: 133.36 }, 
// { time: new Date('9/30/2017 13:10'), AI34111BPV:  63.32 , AI34111CPV: 22.64 , AI34111DPV: 10.88 , AI34722PV: 20.93 , FC34115PV: 306.21 , FC34116PV: 133.08 }, 
// { time: new Date('9/30/2017 13:20'), AI34111BPV:  63.04 , AI34111CPV: 22.67 , AI34111DPV: 11.03 , AI34722PV: 20.93 , FC34115PV: 307.55 , FC34116PV: 132.8 }, 
// { time: new Date('9/30/2017 13:30'), AI34111BPV:  62.76 , AI34111CPV: 22.69 , AI34111DPV: 11.18 , AI34722PV: 20.93 , FC34115PV: 307.35 , FC34116PV: 132.52 }, 
// { time: new Date('9/30/2017 13:40'), AI34111BPV:  62.6 , AI34111CPV: 22.71 , AI34111DPV: 11.16 , AI34722PV: 20.93 , FC34115PV: 306.82 , FC34116PV: 132.14 }, 
// { time: new Date('9/30/2017 13:50'), AI34111BPV:  62.79 , AI34111CPV: 22.74 , AI34111DPV: 10.65 , AI34722PV: 20.93 , FC34115PV: 307.33 , FC34116PV: 133.37 }, 
// { time: new Date('9/30/2017 14:00'), AI34111BPV:  62.95 , AI34111CPV: 22.76 , AI34111DPV: 10.33 , AI34722PV: 20.92 , FC34115PV: 305.91 , FC34116PV: 133.93 }, 
// { time: new Date('9/30/2017 14:10'), AI34111BPV:  63.04 , AI34111CPV: 22.78 , AI34111DPV: 10.52 , AI34722PV: 20.89 , FC34115PV: 304.23 , FC34116PV: 134.13 }, 
// { time: new Date('9/30/2017 14:20'), AI34111BPV:  63.14 , AI34111CPV: 22.81 , AI34111DPV: 10.71 , AI34722PV: 20.89 , FC34115PV: 306.87 , FC34116PV: 134.34 }, 
// { time: new Date('9/30/2017 14:30'), AI34111BPV:  63.22 , AI34111CPV: 22.81 , AI34111DPV: 10.82 , AI34722PV: 20.89 , FC34115PV: 304.37 , FC34116PV: 134.55 }, 
// { time: new Date('9/30/2017 14:40'), AI34111BPV:  63.27 , AI34111CPV: 22.77 , AI34111DPV: 10.68 , AI34722PV: 20.9 , FC34115PV: 305.68 , FC34116PV: 134.75 }, 
// { time: new Date('9/30/2017 14:50'), AI34111BPV:  63.32 , AI34111CPV: 22.72 , AI34111DPV: 10.61 , AI34722PV: 20.9 , FC34115PV: 306.47 , FC34116PV: 136.29 }, 
// { time: new Date('9/30/2017 15:00'), AI34111BPV:  63.37 , AI34111CPV: 22.68 , AI34111DPV: 10.74 , AI34722PV: 20.9 , FC34115PV: 309.75 , FC34116PV: 136.77 }, 
// { time: new Date('9/30/2017 15:10'), AI34111BPV:  63.42 , AI34111CPV: 22.64 , AI34111DPV: 10.87 , AI34722PV: 20.9 , FC34115PV: 304.03 , FC34116PV: 138.05 }, 
// { time: new Date('9/30/2017 15:20'), AI34111BPV:  63.58 , AI34111CPV: 22.59 , AI34111DPV: 10.93 , AI34722PV: 20.9 , FC34115PV: 304.85 , FC34116PV: 138.38 }, 
// { time: new Date('9/30/2017 15:30'), AI34111BPV:  64.05 , AI34111CPV: 22.55 , AI34111DPV: 10.78 , AI34722PV: 20.9 , FC34115PV: 305.77 , FC34116PV: 138.72 }, 
// { time: new Date('9/30/2017 15:40'), AI34111BPV:  64.42 , AI34111CPV: 22.51 , AI34111DPV: 10.69 , AI34722PV: 20.91 , FC34115PV: 307.51 , FC34116PV: 139.82 }, 
// { time: new Date('9/30/2017 15:50'), AI34111BPV:  64.46 , AI34111CPV: 22.46 , AI34111DPV: 10.79 , AI34722PV: 20.91 , FC34115PV: 304.78 , FC34116PV: 140.43 }, 
// { time: new Date('9/30/2017 16:00'), AI34111BPV:  64.51 , AI34111CPV: 22.42 , AI34111DPV: 10.89 , AI34722PV: 20.91 , FC34115PV: 305.45 , FC34116PV: 139.84 }, 
// { time: new Date('9/30/2017 16:10'), AI34111BPV:  64.56 , AI34111CPV: 22.38 , AI34111DPV: 10.93 , AI34722PV: 20.91 , FC34115PV: 302.45 , FC34116PV: 141.06 }, 
// { time: new Date('9/30/2017 16:20'), AI34111BPV:  64.6 , AI34111CPV: 22.33 , AI34111DPV: 10.79 , AI34722PV: 20.91 , FC34115PV: 307.37 , FC34116PV: 141.47 }, 
// { time: new Date('9/30/2017 16:30'), AI34111BPV:  64.67 , AI34111CPV: 22.29 , AI34111DPV: 10.64 , AI34722PV: 20.91 , FC34115PV: 305.99 , FC34116PV: 141.89 }, 
// { time: new Date('9/30/2017 16:40'), AI34111BPV:  64.81 , AI34111CPV: 22.25 , AI34111DPV: 10.5 , AI34722PV: 20.92 , FC34115PV: 306.17 , FC34116PV: 142.25 }, 
// { time: new Date('9/30/2017 16:50'), AI34111BPV:  64.95 , AI34111CPV: 22.2 , AI34111DPV: 10.36 , AI34722PV: 20.92 , FC34115PV: 299.8 , FC34116PV: 142.01 }, 
// { time: new Date('9/30/2017 17:00'), AI34111BPV:  65.11 , AI34111CPV: 22.16 , AI34111DPV: 10.26 , AI34722PV: 20.92 , FC34115PV: 303.94 , FC34116PV: 142.14 }, 
// { time: new Date('9/30/2017 17:10'), AI34111BPV:  65.3 , AI34111CPV: 22.12 , AI34111DPV: 10.3 , AI34722PV: 20.92 , FC34115PV: 307.91 , FC34116PV: 142.27 }, 
// { time: new Date('9/30/2017 17:20'), AI34111BPV:  65.51 , AI34111CPV: 22.07 , AI34111DPV: 10.34 , AI34722PV: 20.92 , FC34115PV: 303.96 , FC34116PV: 142.4 }, 
// { time: new Date('9/30/2017 17:30'), AI34111BPV:  65.8 , AI34111CPV: 22.03 , AI34111DPV: 10.37 , AI34722PV: 20.93 , FC34115PV: 306.87 , FC34116PV: 142.53 }, 
// { time: new Date('9/30/2017 17:40'), AI34111BPV:  66.08 , AI34111CPV: 21.99 , AI34111DPV: 10.41 , AI34722PV: 20.93 , FC34115PV: 305.1 , FC34116PV: 142 }, 
// { time: new Date('9/30/2017 17:50'), AI34111BPV:  66.38 , AI34111CPV: 21.94 , AI34111DPV: 10.42 , AI34722PV: 20.93 , FC34115PV: 303.12 , FC34116PV: 142.46 }, 
// { time: new Date('9/30/2017 18:00'), AI34111BPV:  66.71 , AI34111CPV: 21.9 , AI34111DPV: 10.34 , AI34722PV: 20.93 , FC34115PV: 305.92 , FC34116PV: 142.57 }, 
// { time: new Date('9/30/2017 18:10'), AI34111BPV:  67.08 , AI34111CPV: 21.86 , AI34111DPV: 10.27 , AI34722PV: 20.93 , FC34115PV: 305.22 , FC34116PV: 142.69 }, 
// { time: new Date('9/30/2017 18:20'), AI34111BPV:  67.56 , AI34111CPV: 21.81 , AI34111DPV: 10.19 , AI34722PV: 20.93 , FC34115PV: 301.86 , FC34116PV: 142.8 }, 
// { time: new Date('9/30/2017 18:30'), AI34111BPV:  68.04 , AI34111CPV: 21.77 , AI34111DPV: 10.12 , AI34722PV: 20.94 , FC34115PV: 307.92 , FC34116PV: 142.41 }, 
// { time: new Date('9/30/2017 18:40'), AI34111BPV:  68.33 , AI34111CPV: 21.69 , AI34111DPV: 10.05 , AI34722PV: 20.94 , FC34115PV: 302.86 , FC34116PV: 142.33 }, 
// { time: new Date('9/30/2017 18:50'), AI34111BPV:  68.07 , AI34111CPV: 21.5 , AI34111DPV: 9.97 , AI34722PV: 20.94 , FC34115PV: 305.08 , FC34116PV: 142.25 }, 
// { time: new Date('9/30/2017 19:00'), AI34111BPV:  67.95 , AI34111CPV: 21.31 , AI34111DPV: 9.9 , AI34722PV: 20.94 , FC34115PV: 306.68 , FC34116PV: 142.16 }, 
// { time: new Date('9/30/2017 19:10'), AI34111BPV:  68.23 , AI34111CPV: 21.12 , AI34111DPV: 9.82 , AI34722PV: 20.94 , FC34115PV: 306.54 , FC34116PV: 142.08 }, 
// { time: new Date('9/30/2017 19:20'), AI34111BPV:  68.51 , AI34111CPV: 20.94 , AI34111DPV: 9.75 , AI34722PV: 20.94 , FC34115PV: 304.5 , FC34116PV: 142 }, 
// { time: new Date('9/30/2017 19:30'), AI34111BPV:  68.6 , AI34111CPV: 20.79 , AI34111DPV: 9.69 , AI34722PV: 20.95 , FC34115PV: 298.68 , FC34116PV: 141.91 }, 
// { time: new Date('9/30/2017 19:40'), AI34111BPV:  68.16 , AI34111CPV: 20.79 , AI34111DPV: 9.67 , AI34722PV: 20.95 , FC34115PV: 304.09 , FC34116PV: 142.54 }, 
// { time: new Date('9/30/2017 19:50'), AI34111BPV:  67.9 , AI34111CPV: 20.78 , AI34111DPV: 9.66 , AI34722PV: 20.95 , FC34115PV: 302.87 , FC34116PV: 142.03 }, 
// { time: new Date('9/30/2017 20:00'), AI34111BPV:  68.15 , AI34111CPV: 20.77 , AI34111DPV: 9.64 , AI34722PV: 20.95 , FC34115PV: 302.38 , FC34116PV: 142.76 }, 
// { time: new Date('9/30/2017 20:10'), AI34111BPV:  68.39 , AI34111CPV: 20.76 , AI34111DPV: 9.63 , AI34722PV: 20.95 , FC34115PV: 305.03 , FC34116PV: 141.7 }, 
// { time: new Date('9/30/2017 20:20'), AI34111BPV:  68.65 , AI34111CPV: 20.75 , AI34111DPV: 9.61 , AI34722PV: 20.96 , FC34115PV: 303.95 , FC34116PV: 134.98 }, 
// { time: new Date('9/30/2017 20:30'), AI34111BPV:  68.92 , AI34111CPV: 20.75 , AI34111DPV: 9.6 , AI34722PV: 20.96 , FC34115PV: 303.63 , FC34116PV: 148.96 }, 
// { time: new Date('9/30/2017 20:40'), AI34111BPV:  69.12 , AI34111CPV: 20.74 , AI34111DPV: 9.55 , AI34722PV: 20.96 , FC34115PV: 306.97 , FC34116PV: 149.48 }, 
// { time: new Date('9/30/2017 20:50'), AI34111BPV:  69.11 , AI34111CPV: 20.73 , AI34111DPV: 9.42 , AI34722PV: 20.96 , FC34115PV: 304.67 , FC34116PV: 152 }, 
// { time: new Date('9/30/2017 21:00'), AI34111BPV:  69.11 , AI34111CPV: 20.72 , AI34111DPV: 9.29 , AI34722PV: 20.96 , FC34115PV: 304.71 , FC34116PV: 151.93 }, 
// { time: new Date('9/30/2017 21:10'), AI34111BPV:  69.1 , AI34111CPV: 20.71 , AI34111DPV: 9.17 , AI34722PV: 20.96 , FC34115PV: 309.22 , FC34116PV: 151.86 }, 
// { time: new Date('9/30/2017 21:20'), AI34111BPV:  69.1 , AI34111CPV: 20.7 , AI34111DPV: 9.04 , AI34722PV: 20.97 , FC34115PV: 303.13 , FC34116PV: 151.78 }, 
// { time: new Date('9/30/2017 21:30'), AI34111BPV:  69.09 , AI34111CPV: 20.7 , AI34111DPV: 8.98 , AI34722PV: 20.97 , FC34115PV: 304.9 , FC34116PV: 157.1 }, 
// { time: new Date('9/30/2017 21:40'), AI34111BPV:  69.09 , AI34111CPV: 20.69 , AI34111DPV: 9.13 , AI34722PV: 20.97 , FC34115PV: 300.42 , FC34116PV: 156.73 }, 
// { time: new Date('9/30/2017 21:50'), AI34111BPV:  69.08 , AI34111CPV: 20.68 , AI34111DPV: 9.28 , AI34722PV: 20.97 , FC34115PV: 302.71 , FC34116PV: 156.19 }, 
// { time: new Date('9/30/2017 22:00'), AI34111BPV:  69.08 , AI34111CPV: 20.67 , AI34111DPV: 9.42 , AI34722PV: 20.96 , FC34115PV: 303.32 , FC34116PV: 163.23 }, 
// { time: new Date('9/30/2017 22:10'), AI34111BPV:  69.07 , AI34111CPV: 20.66 , AI34111DPV: 9.57 , AI34722PV: 20.93 , FC34115PV: 306.58 , FC34116PV: 164.11 }, 
// { time: new Date('9/30/2017 22:20'), AI34111BPV:  69 , AI34111CPV: 20.75 , AI34111DPV: 9.72 , AI34722PV: 20.93 , FC34115PV: 304.56 , FC34116PV: 169.06 }, 
// { time: new Date('9/30/2017 22:30'), AI34111BPV:  68.76 , AI34111CPV: 21.1 , AI34111DPV: 9.87 , AI34722PV: 20.93 , FC34115PV: 304.65 , FC34116PV: 169.02 }, 
// { time: new Date('9/30/2017 22:40'), AI34111BPV:  68.51 , AI34111CPV: 21.46 , AI34111DPV: 10.02 , AI34722PV: 20.93 , FC34115PV: 304.66 , FC34116PV: 170.74 }, 
// { time: new Date('9/30/2017 22:50'), AI34111BPV:  67.79 , AI34111CPV: 21.81 , AI34111DPV: 10.25 , AI34722PV: 20.93 , FC34115PV: 304.8 , FC34116PV: 177.67 }, 
// { time: new Date('9/30/2017 23:00'), AI34111BPV:  65.7 , AI34111CPV: 22.17 , AI34111DPV: 10.75 , AI34722PV: 20.93 , FC34115PV: 303.4 , FC34116PV: 183.72 }, 
// { time: new Date('9/30/2017 23:10'), AI34111BPV:  64.13 , AI34111CPV: 22.53 , AI34111DPV: 11.14 , AI34722PV: 20.93 , FC34115PV: 305.18 , FC34116PV: 183.87 }, 
// { time: new Date('9/30/2017 23:20'), AI34111BPV:  64.09 , AI34111CPV: 22.88 , AI34111DPV: 11.23 , AI34722PV: 20.93 , FC34115PV: 303.6 , FC34116PV: 184.02 }, 
// { time: new Date('9/30/2017 23:30'), AI34111BPV:  64.05 , AI34111CPV: 23.24 , AI34111DPV: 11.31 , AI34722PV: 20.93 , FC34115PV: 303.49 , FC34116PV: 184.17 }, 
// { time: new Date('9/30/2017 23:40'), AI34111BPV:  64.01 , AI34111CPV: 23.53 , AI34111DPV: 11.4 , AI34722PV: 20.93 , FC34115PV: 304.3 , FC34116PV: 184.32 }, 
// { time: new Date('9/30/2017 23:50'), AI34111BPV:  63.97 , AI34111CPV: 23.64 , AI34111DPV: 11.48 , AI34722PV: 20.93 , FC34115PV: 306.91 , FC34116PV: 184.47 }, 
// { time: new Date('10/1/2017 0:00'), AI34111BPV:  63.89 , AI34111CPV: 23.76 , AI34111DPV: 11.57 , AI34722PV: 20.93 , FC34115PV: 306.38 , FC34116PV: 184.61 } 
// ];
  

//   //graph box layout
//   private margin = { top: 40, right: 30, bottom: 80, left: 50 };
//   private width = 1000 - this.margin.left - this.margin.right;
//   private height = 450 - this.margin.top - this.margin.bottom;
  
//   //dummy data for svg
//   private svg: any

//   private legendData = [
//     { label: "AI34111BPV", color: "blue", unit: "3550.00KG/H", description: "Flow Rate Sensor 1" },
//     { label: "AI34111CPV", color: "red", unit: "35550.63KG/H", description: "Flow Rate Sensor 2" },
//     { label: "AI34111DPV", color: "green", unit: "155.8DEGC", description: "Temperature Sensor 1" },
//     { label: "AI34722PV", color: "purple", unit: "0.80kg/CM2G", description: "Pressure Sensor 1" },
//     { label: "FC34115PV", color: "black", unit: "60.83%", description: "Valve Opening 1" },
//     { label: "FC34116PV", color: "violet", unit: "0.80kg/CM2G", description: "Valve Opening 2" }
//   ];

//   constructor(private el: ElementRef) {}

//   ngOnInit(): void {}

//   //it will create a chart
//   ngAfterViewInit(): void {
//     this.createChart();
//   }


//   //graphs axis and margin 
// private createChart(): void {
//   this.svg = d3.select(this.el.nativeElement.querySelector('svg'))
//     .attr('width', this.width + this.margin.left + this.margin.right )
//     .attr('height', this.height + this.margin.top + this.margin.bottom + 100)
//     .append('g')
//     .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

//   //x-axis plotting
//   const xScale = d3.scaleTime()
//     .domain(d3.extent(this.data, d => d.time) as [Date, Date])
//     .range([0, this.width]);


//   //added for range of individual series & y-axis plotting
//   const yScales = {};
//   this.legendData.forEach(series => {
//     yScales[series.label] = d3.scaleLinear()
//       .domain([d3.min(this.data, d => d[series.label]) || 0, d3.max(this.data, d => d[series.label]) || 1])
//       .range([this.height, 0]);
//   });
  
//   //it will create sepline based on dummy data
//   const createStepLine = (seriesKey: keyof typeof this.data[0]) =>
//     d3.line()
//       .x(d => xScale(d.time as Date))
//       .y(d => yScales[seriesKey](d[seriesKey] as number))
//       .curve(d3.curveStepAfter);

//   //for every legend data it will create step line. 
//   this.legendData.forEach((series) => {
//     const stepLine = createStepLine(series.label as keyof (typeof this.data)[0]);
//     this.svg.append('path')
//       .datum(this.data)
//       .attr('fill', 'none')
//       .attr('stroke', series.color)
//       .attr('stroke-width', 1)
//       .attr('d', stepLine);
//   });

//   //x axis time format || replacable by below comment
//   const xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat('%H:%M'));
//   this.svg.append('g').attr('transform', `translate(0, ${this.height})`).call(xAxis);
  
//   //hides the data
//   this.svg.append('g').call(d3.axisLeft(yScales[this.legendData[0].label]).tickFormat(() => "")); 

//   // const yAxis = d3.axisLeft(yScales[this.legendData[0].label])
//   //     .tickFormat(d3.format('.2f')); // Ensures numbers are well-formatted**
//   //   this.svg.append('g').call(yAxis);
  

//   //added for high and low values

//   let yOffsetMin = -85; // Starting position for min values
//   let yOffsetMax = -40; // Starting position for max values

//   this.legendData.forEach(series => {
//     const minVal = d3.min(this.data, d => d[series.label]) || 0;
//     const maxVal = d3.max(this.data, d => d[series.label]) || 0;

//     this.svg.append("text")
//       .attr("x", -40)
//       .attr("y", yScales[series.label](minVal) + yOffsetMin)
//       .attr("dy", "0.35em")
//       .style("fill", series.color)
//       .style("font-size", "12px")
//       .text(minVal.toFixed(2));

//     yOffsetMin += 15; // Increase offset for next min label


//     this.svg.append("text")
//       .attr("x", -40)
//       .attr("y", yScales[series.label](maxVal) -yOffsetMax)
//       .attr("dy", "0.35em")
//       .style("fill", series.color)
//       .style("font-size", "12px")
//       .text(maxVal.toFixed(2));

//     yOffsetMax += 15; // Increase offset for next max label

//   });

//   //scaling legend below the chart
//      const legend = this.svg.append("g")
//     .attr("transform", `translate(${this.width/ 2-450}, ${this.height/ 2+200})`); 
  
//   //legend item vertically
//   this.legendData.forEach((series, index) => {
//     const legendRow = legend.append("g")
//       .attr("transform", `translate(0, ${index * 20})`);
  
//     //legend box and color
//     legendRow.append("rect")
//       .attr("width", 12)
//       .attr("height", 12)
//       .attr("fill", series.color);
  
//     //legend texts
//     legendRow.append("text")
//       .attr("x", 18)
//       .attr("y", 10)
//       .attr("font-size", "12px")
//       .text(`${series.label} (${series.unit}) - ${series.description}`);
//   });

//   const graphTitle = "Graph 1: Column distribution on 30th Sept @1d 0h 0m 0s";

//   // Append title at the top center of the graph
//   this.svg.append("text")
//   .attr("x", this.width / 2) 
//   .attr("y", -20) 
//   .attr("text-anchor", "middle") 
//   .style("font-size", "16px") 
//   .style("font-weight", "bold") 
//   .style("fill", "black") 
//   .text(graphTitle);

//   const startTime = "30 Sept 00:00:00";
  
// // Append start time at the top-left
//   this.svg.append("text")
//   .attr("x", 0) 
//   .attr("y", -5) 
//   .attr("text-anchor", "start") 
//   .style("font-size", "12px") 
//   .style("fill", "black") 
//   .text(startTime);

//   const endTime = "1 Oct 00:00:00";
  
//   // Append end time at the top-right
//   this.svg.append("text")
//   .attr("x", this.width) 
//   .attr("y", -5) 
//   .attr("text-anchor", "end") 
//   .style("font-size", "12px")
//   .style("fill", "black") 
//   .text(endTime);

//   }
// }  


import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from '../Services/graph.service'; 
import { GraphData } from '../Models/Graph'; 

@Component({
  selector: 'app-step-chart',
  templateUrl: './step-chart.component.html',
  styleUrls: ['./step-chart.component.css']
})
// export class StepChartComponent implements OnInit {
//   private data: GraphData[] = [];

//   constructor(private graphService: GraphService) {}

//   ngOnInit(): void {
//     this.fetchData();
//   }

//   fetchData(): void {
//     this.graphService.getGraphData().subscribe(
//       (response) => {
//         this.data = response;
//         this.createChart();
//       },
//       (error) => console.error('Error fetching data:', error)
//     );
//   }

//   createChart(): void {
//     const margin = { top: 50, right: 50, bottom: 250, left: 70 }; // Increased bottom margin for legend
//     const width = 1000 - margin.left - margin.right;
//     const height = 700 - margin.top - margin.bottom; // Increased height

//     // Remove previous SVG if exists
//     d3.select('#chart').selectAll('*').remove();

//     const svg = d3.select('#chart')
//       .append('svg')
//       .attr('width', width + margin.left + margin.right)
//       .attr('height', height + margin.top + margin.bottom)
//       .style('display', 'block') // Centers the SVG horizontally
//       .style('margin', 'auto') // Centers the graph
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`);

//     const parseDate = d3.timeParse('%Y-%m-%dT%H:%M:%S');
//     this.data.forEach(d => {
//       d.date = parseDate(d.date) as unknown as string;
//     });

//     const x = d3.scaleTime()
//       .domain(d3.extent(this.data, d => new Date(d.date)) as [Date, Date])
//       .range([0, width]);

      

//     const y = d3.scaleLinear()
//       .domain([
//         d3.min(this.data, d => Math.min(d.aI34111BPV, d.aI34111CPV, d.aI34111DPV, d.aI34722PV, d.fC34115PV, d.fC34116PV, d.fC34116SV, d.fC34122PV, d.fC34122SV, d.fC34155PV))!,
//         d3.max(this.data, d => Math.max(d.aI34111BPV, d.aI34111CPV, d.aI34111DPV, d.aI34722PV, d.fC34115PV, d.fC34116PV, d.fC34116SV, d.fC34122PV, d.fC34122SV, d.fC34155PV))!
//       ])
//       .range([height, 0]);

//     svg.append('g')
//       .attr('transform', `translate(0,${height})`)
//       .call(d3.axisBottom(x));

//     svg.append('g')
//       .call(d3.axisLeft(y));

//     const colors = {
//       aI34111BPV: 'blue',
//       aI34111CPV: 'red',
//       aI34111DPV: 'green',
//       aI34722PV: 'purple',
//       fC34115PV: 'black',
//       fC34116PV: 'pink',
//       fC34116SV: 'orange',
//       fC34122PV: 'cyan',
//       fC34122SV: 'brown',
//       fC34155PV: 'yellow'
//     };

//     Object.keys(colors).forEach((key: keyof GraphData) => {
//       const line = d3.line()
//         .x(d => x(new Date((d as GraphData).date)))
//         .y(d => y((d as GraphData)[key as keyof GraphData]))
//         .curve(d3.curveStep);

//       svg.append('path')
//         .datum(this.data)
//         .attr('fill', 'none')
//         .attr('stroke', colors[key])
//         .attr('stroke-width', 2)
//         .attr('d', line);
//     });

//     // Graph Title
//     svg.append('text')
//       .attr('x', width / 2)
//       .attr('y', -20)
//       .attr('text-anchor', 'middle')
//       .style('font-size', '18px')
//       .style('font-weight', 'bold')
//       .text('Graph 1: Column Distribution on 30Sept"17 @1d 0h 0m 0s ');

//     // Legend below x-axis
//     const legend = svg.append('g')
//       .attr('transform', `translate(${width / 2 - 425}, ${height + 30})`); // below x-axis

//     let legendY = 0;
//     Object.entries(colors).forEach(([key, color]) => {
//       const legendItem = legend.append('g')
//         .attr('transform', `translate(0, ${legendY})`);

//       legendItem.append('rect')
//         .attr('x', 0)
//         .attr('width', 12)
//         .attr('height', 12)
//         .attr('fill', color);

//       legendItem.append('text')
//         .attr('x', 20)
//         .attr('y', 10)
//         .text(key)
//         .style('font-size', '12px')
//         .attr('alignment-baseline', 'middle');

//       legendY += 20; // Move to next row
//     });
//   }
// }
export class StepChartComponent implements OnInit {
  
  @ViewChild('chartContainer', { static: true }) private chartContainer!: ElementRef;
  @ViewChild('legendContainer', { static: false }) legendContainer!: ElementRef;


  private margin = { top: 50, right: 20, bottom: 300, left: 160 };
  private width = 1250 - this.margin.left - this.margin.right;
  private height = 750 - this.margin.top - this.margin.bottom;
  private svg: any;
  private xScale: any;
  private yScale: any;
  private colorScale: any;
  private data: GraphData[] = [];
  private keys: string[] = [];

  constructor(private graphservice: GraphService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.graphservice.getGraphData().subscribe(
      (response: GraphData[]) => {
        this.data = response;
        this.keys = Object.keys(response[0]).filter(key => key !== 'date'); // Extract column names dynamically
        this.createChart();
      },
      (error) => {
        console.error('Error fetching chart data:', error);
      }
    );
  }

  private createChart(): void {
    d3.select(this.chartContainer.nativeElement).select('svg').remove();
  
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
  
    this.keys.forEach((key) => {
      const minVal = d3.min(this.data, d => (d as any)[key]) || 0;
      const maxVal = d3.max(this.data, d => (d as any)[key]) || 100;
  
      this.yScale = d3.scaleLinear().domain([minVal, maxVal]).range([this.height, 0]);
  
      const line = d3.line()
        .x(d => this.xScale(new Date((d as any).date)))
        .y(d => this.yScale((d as any)[key]))
        .curve(d3.curveStepAfter);
  
      this.svg.append('path')
        .datum(this.data as any)
        .attr('fill', 'none')
        .attr('stroke', this.colorScale(key) as string)
        .attr('stroke-width', 2)
        .attr('d', line);
    });
  
    this.svg.append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(this.xScale).ticks(d3.timeMinute.every(60)));
  
    //this.svg.append('g').call(d3.axisLeft(this.yScale));
// Keep y-axis but remove default ticks
   const yAxis = d3.axisLeft(this.yScale).tickFormat(() => "");
   //this.svg.append('g').call(yAxis);

   this.svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis);


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
// **Chart Title**
    this.svg.append("text")
    .attr("x", this.width / 2)
    .attr("y", -30) // Above chart
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight", "bold")
    .text("Gaph 1: Column Distribution on 30'Sept 17 @ 1d 0h 0m 0s");
  

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
}