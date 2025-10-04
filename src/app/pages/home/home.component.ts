import { Component } from '@angular/core';

import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FormComponent } from '../../common/form/form.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
