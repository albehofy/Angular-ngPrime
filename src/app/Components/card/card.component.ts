import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @ViewChild('alertMessage') myInput!: ElementRef;
  textCopied: boolean = false;
  copiedStatus: string = ''
  // data for qr code
  data: string = "Mohamed Reda, Frot-end Developer, and this's a part of 'A Technologies' task"

  // copying text
  copyTecketUrl(inputElement: HTMLTextAreaElement) {
    inputElement.style.backgroundColor = "#8A74F9"
    inputElement.style.color = "#fff"
    inputElement.select();
    const successful = document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    document.getSelection()?.removeAllRanges();

    if (successful) {
      this.textCopied = true;
      this.copiedStatus = 'تم نسخ النص بنجاح';
      window.setTimeout(() => {
        inputElement.style.backgroundColor = "transparent"
        inputElement.style.color = "#1C1C28"
        this.textCopied = false;
      }, 2500)

    } else {
      this.textCopied = true;
      this.copiedStatus = 'عذرا حدث خطأ حاول مجددا';
      window.setTimeout(() => {
        this.textCopied = false;
      }, 2500)
    }
  }
}
