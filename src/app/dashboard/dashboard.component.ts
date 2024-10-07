import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartOptions, TooltipItem } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
import { LocalStorageService } from '../local-storage.service';

Chart.register(ChartDataLabels); 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChart: any;
  pieChart: any;
  sideBarArr:any = [
    { class: "pi pi-plus", name: "Add Book", link: "Addbook" },
    { class: "pi pi-trash", name: "Delete Book", link: "deletebook" },
    { class: "pi pi-eye", name: "View Books", link: "viewbook" },
    { class: "pi pi-user-plus", name: "Add Student", link: "" },
    { class: "pi pi-external-link", name: "Issue Book", link: "" },
    { class: "pi pi-undo", name: "Return Book", link: "" },
    { class: "pi pi-table", name: "Report", link: "" },
  ];
  issuedBooks: any = [];
  constructor(private router: Router, private localStorageService: LocalStorageService) {}
  navFn(obj: any) {
    if(obj.link)
    this.router.navigate(['/' + obj.link]);
  }

  barChartData: any;
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      datalabels: {
        display: true,
        color: 'white',
        formatter: (value: number) => value.toString(), 
      },
    },
  };

  pieChartData: any;
  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'pie'>) => {
            const total = this.groupedIssuedBooks.reduce((sum:any, book:any) => sum + book.qty, 0); // Total issued books
            const value = tooltipItem.raw as number; 
            const percentage = Math.round((value / total) * 100); 
            return `${tooltipItem.label}: ${percentage}%`; 
          },
        },
      },
    },
  };

  groupedIssuedBooks: any = [];
  groupByPerson(issuedBooks: any[]) {
    const grouped = issuedBooks.reduce((acc, curr) => {
      const { prsnName, qty } = curr;
      if (!acc[prsnName]) {
        acc[prsnName] = { prsnName, qty: 0 }; 
      }
      acc[prsnName].qty += parseInt(qty);
      return acc;
    }, {});

    return Object.values(grouped); 
  }
  ngOnInit() {
    this.issuedBooks = this.localStorageService.getItem('lbraryDetails') || [];
    this.groupedIssuedBooks = this.groupByPerson(this.issuedBooks);
    const labels = this.groupedIssuedBooks.map((book: any) => book.prsnName);
    const bookQuantities = this.groupedIssuedBooks.map((book: any) => book.qty);
    this.barChartData = {
      labels,
      datasets: [
        {
          label: 'No. of Books',
          data: bookQuantities,
          backgroundColor: '#4472C4',
        },
      ],
    };

    this.pieChartData = {
      labels,
      datasets: [
        {
          data: bookQuantities,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    };
  }
}
