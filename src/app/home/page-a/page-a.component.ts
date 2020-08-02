import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  param = 'abcd';
  constructor(public navCtrl: NavController, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const tmp = params.get('a');
      console.log('page a', tmp);
      if (tmp === undefined) {
        return;
      }
      if (tmp == null) {
        return;
      }
      if (tmp.length < 3) {
        return;
      }
      this.param = tmp;
    });
  }

  onLeftClick() {
    this.navCtrl.back();
    // this.router.navigate(['/a'], { relativeTo: this.route });
  }

  goToPageB() {
    this.router.navigateByUrl('/b?a=' + this.param.slice(0, 2));
  }
}
