import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  showTDF() {
    this.router.navigate(['tdf'], { relativeTo: this.route });
  }

  showReactive() {
    this.router.navigate(['reactive'], { relativeTo: this.route });
  }

}
