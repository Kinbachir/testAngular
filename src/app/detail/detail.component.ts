import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from 'app/service/dashboard-service.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class detailComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ["2016","2017"];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartDataCA: ChartDataSets[] = [{ data: [], label: 'Année' }];
  barChartDataMargin: ChartDataSets[] = [{ data: [], label: 'Année' }];
  barChartDataLoss: ChartDataSets[] = [{ data: [], label: 'Année' }];
  barChartDataEbitda: ChartDataSets[] = [{ data: [], label: 'Année' }];
  siren:any;
  public barChartColors: Color[] = [
    { backgroundColor: '#4E59FF',
      hoverBackgroundColor:'#4E59FF' },
  ]
  constructor(private service:DashboardServiceService ){
    
  }
  ngOnInit() {
    localStorage.setItem('test','1');
    this.siren=localStorage.getItem('siren');
    var id=localStorage.getItem('idBus');
    this.service
      .details()
      .subscribe((response: any) => {
        var liste=response.filter((word => word.business ==id));
        console.log(liste.sort(this.compareNumbers))
        var listeCA=[];
        var listeMargin=[];
        var listeLoss=[];
        var listeEbitda=[];
        liste.forEach(element => {
          listeCA.push(element.ca);
          listeMargin.push(element.margin);
          listeLoss.push(element.loss);
          listeEbitda.push(element.ebitda);
        });
        this.barChartDataCA=[
          { data: listeCA, label: 'Année' }
        ]
        this.barChartDataMargin=[
          { data: listeMargin, label: 'Année' }
        ]
        this.barChartDataLoss=[
          { data: listeLoss, label: 'Année' }
        ]
        this.barChartDataEbitda=[
          { data: listeEbitda, label: 'Année' }
        ]
      })
  }
  compareNumbers(a, b) {
    return a.year - b.year;
  }

}


