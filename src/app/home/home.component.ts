import { Component } from '@angular/core';
import { InfoComponent } from './component/info.component';
import { BehaviorSubject, timer } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InfoComponent,
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  state$ = new BehaviorSubject<string | null>(null)

  ngOnInit() {
    timer(500).subscribe(() => {
      this.state$.next('foo')
    })
  }

}
