import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  ellipsisHorizontal,
  flagOutline,
  bookOutline,
  restaurantOutline,
  sparklesOutline,
} from 'ionicons/icons';

/** Powłoka z dolnym paskiem zakładek. Każda zakładka to osobna, leniwie ładowana strona. */
@Component({
  selector: 'app-tabs',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  templateUrl: './tabs.page.html',
  styleUrl: './tabs.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPage {
  constructor() {
    addIcons({ restaurantOutline, flagOutline, sparklesOutline, bookOutline, ellipsisHorizontal });
  }
}
