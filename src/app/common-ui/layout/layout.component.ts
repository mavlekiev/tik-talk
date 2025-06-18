import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  profileServise = inject(ProfileService);

  ngOnInit() {
    console.log('ngOnInit');
    this.profileServise.getMe().subscribe((val) => {
      console.log(val);
    });
  }
}
