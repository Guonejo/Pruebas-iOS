import { Component } from '@angular/core';
import { SwiperModule } from 'swiper/angular';  // Importar el módulo correcto
import { SwiperOptions } from 'swiper/types';  // Opciones de tipo correcto
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Instalar los módulos necesarios
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage {
  // Configuración de Swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: true,
    speed: 400
  };

  constructor() {}

  goToLogin() {
    console.log('Ir a la página de inicio de sesión');
  }
}
