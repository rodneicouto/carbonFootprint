import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input('progress') progress: number;

  constructor() {
  }

  public percent(){
    if (!this.progress) return 0;
    if( this.progress >= 120 ) return 100;
    return ( this.progress / 120) * 100;
  }

  progressUserPresentable(){
    if( !this.progress) return 0;
    return this.progress;
  }
}
