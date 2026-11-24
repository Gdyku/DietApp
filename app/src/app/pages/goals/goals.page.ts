import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-goals',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './goals.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalsPage {}
