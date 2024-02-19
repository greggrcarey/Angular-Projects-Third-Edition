import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { switchMap, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'weather-app';
  constructor(private snackBar: MatSnackBar, private updates: SwUpdate) { }

  ngOnInit(): void {
    this.updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => this.snackBar.open('A new version is available!', 'Update now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.updates.activateUpdate().then(() => location.reload()))
    ).subscribe();
  }

}
