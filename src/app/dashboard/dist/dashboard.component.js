"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var chart_js_1 = require("chart.js");
var chartjs_plugin_datalabels_1 = require("chartjs-plugin-datalabels");
chart_js_1.Chart.register(chartjs_plugin_datalabels_1["default"]);
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, localStorageService) {
        var _this = this;
        this.router = router;
        this.localStorageService = localStorageService;
        this.sideBarArr = [
            { "class": "pi pi-plus", name: "Add Book", link: "Addbook" },
            { "class": "pi pi-trash", name: "Delete Book", link: "deletebook" },
            { "class": "pi pi-eye", name: "View Books", link: "viewbook" },
            { "class": "pi pi-user-plus", name: "Add Student", link: "" },
            { "class": "pi pi-external-link", name: "Issue Book", link: "" },
            { "class": "pi pi-undo", name: "Return Book", link: "" },
            { "class": "pi pi-table", name: "Report", link: "" },
        ];
        this.issuedBooks = [];
        this.barChartOptions = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: true
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    display: true,
                    color: 'white',
                    formatter: function (value) { return value.toString(); }
                }
            }
        };
        this.pieChartOptions = {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            var total = _this.groupedIssuedBooks.reduce(function (sum, book) { return sum + book.qty; }, 0); // Total issued books
                            var value = tooltipItem.raw;
                            var percentage = Math.round((value / total) * 100);
                            return tooltipItem.label + ": " + percentage + "%";
                        }
                    }
                }
            }
        };
        this.groupedIssuedBooks = [];
    }
    DashboardComponent.prototype.navFn = function (obj) {
        if (obj.link)
            this.router.navigate(['/' + obj.link]);
    };
    DashboardComponent.prototype.groupByPerson = function (issuedBooks) {
        var grouped = issuedBooks.reduce(function (acc, curr) {
            var prsnName = curr.prsnName, qty = curr.qty;
            if (!acc[prsnName]) {
                acc[prsnName] = { prsnName: prsnName, qty: 0 };
            }
            acc[prsnName].qty += parseInt(qty);
            return acc;
        }, {});
        return Object.values(grouped);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.issuedBooks = this.localStorageService.getItem('lbraryDetails') || [];
        this.groupedIssuedBooks = this.groupByPerson(this.issuedBooks);
        var labels = this.groupedIssuedBooks.map(function (book) { return book.prsnName; });
        var bookQuantities = this.groupedIssuedBooks.map(function (book) { return book.qty; });
        this.barChartData = {
            labels: labels,
            datasets: [
                {
                    label: 'No. of Books',
                    data: bookQuantities,
                    backgroundColor: '#4472C4'
                },
            ]
        };
        this.pieChartData = {
            labels: labels,
            datasets: [
                {
                    data: bookQuantities,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                },
            ]
        };
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
