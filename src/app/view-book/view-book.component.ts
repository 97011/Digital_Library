import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(private loclStrge:LocalStorageService,private router:Router) { }
  bookData:any=[];
  navFn(){
    this.router.navigate(['/dashboard'])
  }
  ngOnInit(): void {
    this.bookData=this.loclStrge.getItem("lbraryDetails")||[]
  }

}
