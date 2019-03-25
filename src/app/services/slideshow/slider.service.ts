import { Injectable } from '@angular/core';
import { SlideComponent } from 'src/app/classes/slide.class';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  public _slideIems: SlideComponent[] = [];
  public currentPosition = 0;
  constructor() { }
}
