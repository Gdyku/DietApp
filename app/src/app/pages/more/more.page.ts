import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-more',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './more.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MorePage {}
