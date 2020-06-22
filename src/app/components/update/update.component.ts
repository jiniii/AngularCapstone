import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }
  cancel() {
    this.route.navigate(['products']);
  }
}
