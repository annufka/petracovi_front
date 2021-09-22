import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  closeResult = '';
  formLogin = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });
  layout_days: string[];
  layout_time: string[];

  constructor(private modalService: NgbModal) {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    const working_time = ['Выходной', 'Выходной', '10:00 - 17:00', '10:00 - 17:00', '10:00 - 17:00', '10:00 - 17:00', '10:00 - 15:00']
    const today = new Date();

    this.layout_days = [...Array(7).keys()].map(i => days[(i + today.getDay()) % days.length]);
    this.layout_days[this.layout_days.length - 1] = this.layout_days[this.layout_days.length - 1];

    this.layout_time = [...Array(7).keys()].map(i => working_time[(i + today.getDay()) % working_time.length]);
    this.layout_time[this.layout_time.length - 1] = this.layout_time[this.layout_time.length - 1];
  }

  ngOnInit(): void {

  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  login() {
    console.log("Hi!")
  }

}
