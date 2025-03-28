import { Routes } from '@angular/router';
import { StepChartComponent } from '../step-chart/step-chart.component';

export const routes: Routes = [
    { 
        path: '', 
        component: StepChartComponent 
    },
    { 
    path: 'step-chart', 
    component: StepChartComponent
    }
];
