import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SliderService } from 'src/app/services/slideshow/slider.service';
import { SlideComponent } from 'src/app/classes/slide.class';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public SlidePages: SlideComponent[] = [];
  public currentPage: number = 0;
  constructor(public _slide: SliderService, @Inject(DOCUMENT) private _document: Document) { }

  async ngOnInit() {
    const PagesSliding = await this.CreateSlideItems();
    if (PagesSliding) {
      this.SlidePages = this._slide._slideIems;
         //  this.changeSliderPageAuto();
    }
  }
  ngOnDestroy() {
    this._document.body.removeAttribute('class');
    this._slide._slideIems = [];
  }
  CreateSlideItems(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // SliderPages
      const WebDesignComponent = new SlideComponent('web_design', true, 0);
      const VisualComponent = new SlideComponent('visual', false, 1);
      const BackendComponent = new SlideComponent('backend', false, 2);
      const AppComponent = new SlideComponent('app', false, 3);
      const AdwordComponent = new SlideComponent('adword', false, 4);
      const UxComponent = new SlideComponent('ux', false, 5);
      const BrandingComponent = new SlideComponent('branding', false, 6);
      const MarketingComponent = new SlideComponent('marketing', false, 7);
      this._slide._slideIems.push(WebDesignComponent);
      this._slide._slideIems.push(VisualComponent);
      this._slide._slideIems.push(BackendComponent);
      this._slide._slideIems.push(AppComponent);
      this._slide._slideIems.push(AdwordComponent);
      this._slide._slideIems.push(UxComponent);
      this._slide._slideIems.push(BrandingComponent);
      this._slide._slideIems.push(MarketingComponent);
      if (this._slide._slideIems.length >= 7 && this._slide._slideIems !== undefined) {
        resolve(true);
      }
    });
  }
  // Cambiar slider dinamicamente
  changeSliderPageAuto(): void {
    setInterval((): void => {
      if (this.currentPage === this._slide.currentPosition) {
        for (const page of this._slide._slideIems) {
          if (page.position === this._slide.currentPosition) {
            page.Displayed = false;
          }
        }
      }
      this._slide.currentPosition = (this._slide.currentPosition + 1);
      if (this._slide.currentPosition >= 8) {
        this._slide.currentPosition = 0;
      }
      for (const page of this._slide._slideIems) {
        if (page.position === this._slide.currentPosition) {
          page.Displayed = true;
        }
      }
        this.currentPage = this._slide.currentPosition;
        console.log('position ' + this.currentPage);
    }, 4500);
  }
}
