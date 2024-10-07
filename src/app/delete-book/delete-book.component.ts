import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private loclStrge:LocalStorageService,private router:Router, private tostMsg: MessageService) { }
  dbookData:any=[];
  navFn(){
    this.router.navigate(['/dashboard'])
  }
  delFn(index:number){
    this.dbookData.splice(index,1);
    this.loclStrge.setItem("lbraryDetails",this.dbookData,'delete')
    this.tostMsg.add({
      severity: "error",
      summary: "Record Deleted",
      life: 2000
    })
  }
  ngOnInit(): void {
    this.dbookData=this.loclStrge.getItem("lbraryDetails")||[]
  }

}
