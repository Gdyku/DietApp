import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-meal-plan',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './meal-plan.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlanPage {}
