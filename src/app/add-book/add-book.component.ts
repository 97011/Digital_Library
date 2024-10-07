import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBookGrp: FormGroup;
  public branches: any = [];
  public addBookArrs: any = [];
  constructor(private fb: FormBuilder, private loclStrge: LocalStorageService, private tostMsg: MessageService,private router:Router) {
    this.addBookGrp = fb.group({
      prsnName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      prsnRollNo: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      isbnNo: new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      bokName: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      authr: new FormControl(null, [Validators.pattern('^[a-zA-Z,. ]+$'),Validators.minLength(1), Validators.maxLength(50)]),
      publicatn: new FormControl(null, [Validators.pattern('^[a-zA-Z,. ]+$'),Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      details: new FormControl(null, [Validators.pattern('^[a-zA-Z0-9,. ]+$'),Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      qty: new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      price: new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.minLength(1), Validators.maxLength(50)]),
      brnch: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      issuedOn: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.branches = [
      { label: "IT", value: "IT" },
      { label: "Civil", value: "Civil" },
      { label: "Mechanical", value: "Mechanical" }
    ]
  }
  navFn(){
    this.router.navigate(['/dashboard'])
  }
  addBokFn() {
    if (this.addBookGrp.valid) {
      console.log(this.addBookGrp.value);
      this.addBookArrs.push(this.addBookGrp.value)
      this.loclStrge.setItem('lbraryDetails', this.addBookGrp.value,"ADD");
      this.tostMsg.add({
        severity: "success",
        summary: "Record Added Successfully",
        life: 1000
      })
      this.addBookGrp.reset()
    }
  }


}
