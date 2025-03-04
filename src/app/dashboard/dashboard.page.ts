import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';



import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
import { WebService } from '../web.service';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | undefined;
  user:any=[]
  oppFlag=false
  supFlag=false
  admFlag=false
  constructor(public router:Router , public service:WebService) {

    
     var user:any= (localStorage.getItem("user"))
     this.user=JSON.parse(user)
  
     if(this.user.sRole=='Opearator')
        {
          this.oppFlag=true
        } 
      else if(this.user.sRole=='Supervisor')
      {
        this.oppFlag=true
        this.supFlag=true

      }
      else if(this.user.sRole=='Admin')
      {
        this.oppFlag=true
        this.supFlag=true
        this.admFlag=true
      }
    
    

    // const barChartOptions = {
    //   series: [
    //     {
    //       data: [10, 8, 6, 4, 2],
    //     },
    //   ],
    //   chart: {
    //     type: 'bar',
    //     height: 350,
    //     toolbar: {
    //       show: false,
    //     },
    //   },
    //   colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    //   plotOptions: {
    //     bar: {
    //       distributed: true,
    //       borderRadius: 4,
    //       horizontal: false,
    //       columnWidth: '40%',
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   legend: {
    //     show: false,
    //   },
    //   xaxis: {
    //     categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    //   },
    //   yaxis: {
    //     title: {
    //       text: 'Count',
    //     },
    //   },
    // };
    // const barChart = new ApexCharts(
    //   document.querySelector('#bar-chart'),
    //   barChartOptions
    // );
    // barChart.render();
    
}

// viewComplaint()
// {
//     this.router.navigateByUrl('home/viewcomplaint')
// }

addOperator()
    {
      console.log("in")
      this.router.navigateByUrl('home/registration')
      // this.router.navigateByUrl('home/registration')

    }
    viewAllShippment()
    {
      console.log("in")
      this.router.navigateByUrl('home/viewallshippment')
      // this.router.navigateByUrl('home/registration')

    }
    addSupervisor()
    {
      this.router.navigateByUrl('home/registration')
    }
    cancelShippment()
    {
      console.log("in")
      this.router.navigateByUrl('home/cancel-shippment')
      // this.router.navigateByUrl('home/registration')

    }
    viewStatus()
    {
      console.log("in")
      this.router.navigateByUrl('home')
      // this.router.navigateByUrl('home/registration')

    }
    answerComplaint()
    {
      console.log("in")
      this.router.navigateByUrl('home/answercomplaint')
      // this.router.navigateByUrl('home/registration')

    }
    addOrder()
    {
      this.router.navigateByUrl('home/addorder')
    }
    forwardShippment()
    {
      this.router.navigateByUrl('home/viewallshippment')
    }
    
    viewComplaint()
    {
      this.router.navigateByUrl('home/viewcomplaint')
    }
    viewFeedback()
    {
      this.router.navigateByUrl('home/feedback')
    }
}


