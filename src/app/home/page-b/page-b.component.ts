import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss'],
})
export class PageBComponent implements OnInit {
  param = 'abcd';
  constructor(public navCtrl: NavController,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const tmp = params.get('a');
      console.log('page b', tmp);
      if (tmp === undefined) {
        return;
      }
      if (tmp == null) {
        return;
      }
      this.param = tmp;
    });
  }

  onLeftClick() {
    this.navCtrl.back();
    // this.router.navigate(['/a'], { relativeTo: this.route });
  }
}
