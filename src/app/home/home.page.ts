import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PartialObserver} from 'rxjs';
import {AlertController, IonRouterOutlet, NavController, Platform} from '@ionic/angular';
import {Plugins} from '@capacitor/core';

const {App} = Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
    public param = 'abcd';
    private sub: any;
    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    constructor(
        private platform: Platform,
        private ionRouterOutlet: IonRouterOutlet,
        private alertController: AlertController,
        private route: ActivatedRoute,
        private router: Router) {
        this.backbutton();
    }

    onLeftClick() {
        console.log('click');
    }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((params) => {
            const tmp = params.get('a');
            console.log('home', tmp);
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

    goToAPage() {
        this.router.navigateByUrl('/a?a=' + this.param.slice(0, 3));
    }

    ngAfterViewInit(): void {
        console.log('home page register');
        // this.sub = this.platform.backButton.subscribeWithPriority(1, () => {
        //   console.log('点击退出按钮', this.constructor.name);
        //   if (this.constructor.name == 'HomePage') {
        //     if (window.confirm('要退出吗?')) {
        //       navigator['app'].exitApp();
        //     }
        //   }
        // });
    }

    ngOnDestroy(): void {
        console.log('home page unregister');
    }

    backbutton() {
        console.log('注册按钮');
        this.sub = this.platform.backButton.subscribeWithPriority(1, () => {
            console.log('按钮被点击,url: ' + this.router.url);
            console.log('this.routerOutlets.canGoBack: ' + this.ionRouterOutlet.canGoBack());
            if (this.ionRouterOutlet.canGoBack()) {
              console.log('回退');
              this.ionRouterOutlet.pop();
            } else if (this.router.url === '/') {
                if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                    this.lastTimeBackPress = new Date().getTime();
                    this.presentAlertConfirm();
                    console.log('判断时间');
                } else {
                    App.exitApp();
                    console.log('退出');
                }
            }
        });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            // header: 'Confirm!',
            message: 'Are you sure you want to exit the app?',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('选择不退出');
                }
            }, {
                text: 'Close App',
                handler: () => {
                    console.log('选择退出');
                    App.exitApp();
                }
            }]
        });
        await alert.present();
    }
}
