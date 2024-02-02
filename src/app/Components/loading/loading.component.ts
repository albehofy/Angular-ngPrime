import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loadingText: string = 'جارى اعداد الصفحة المطلوبة'
  constructor() {
    window.setTimeout(() => {
      this.loadingText = 'تم الانتهاء  من الاعدادات '
    }, 1000)
  }
}
