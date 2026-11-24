import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  templateUrl: './recipes.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPage {}
