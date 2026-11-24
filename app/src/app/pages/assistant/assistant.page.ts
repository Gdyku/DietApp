import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-assistant',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './assistant.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantPage {}
