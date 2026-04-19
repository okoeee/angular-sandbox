import { Component, Input } from "@angular/core";


@Component({
  selector: 'info',
  standalone: true,
  imports: [],
  templateUrl: 'info.component.html',
})
export class InfoComponent {

  @Input() state: string | null = null;

}
