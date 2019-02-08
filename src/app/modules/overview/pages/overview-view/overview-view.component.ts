import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:    'app-overview-view',
  templateUrl: './overview-view.component.html',
  styleUrls:   ['./overview-view.component.scss']
})
export class OverviewViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  navigateTo($event: Event) {
    const targetValue = $event.target['value'];
    this.router.navigate([targetValue ? targetValue : '.'], {relativeTo: this.route});
  }
}
