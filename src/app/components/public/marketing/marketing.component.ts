import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SizeDevice } from '../../../classes/window.class';
import { MatDialog } from '@angular/material';
import { MarketingModalComponent } from '../shared/marketing-modal/marketing-modal.component';
import { NgForm } from '@angular/forms';
import { CampaignsService } from '../../../services/ads/campaigns.service';
import { ParticleConfigDesktop, ParticleStyle, ParticleConfigMobile } from '../../../enviroments/particles.config';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DiscountObject } from 'src/app/classes/campaign/discount.model';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['../../../../ads.css', './marketing.component.css']
})
export class MarketingComponent implements OnInit, OnDestroy {
  Device: SizeDevice;
  public ParticleStyle: object = {};
  public particles: object | any = {};
  public width: number = 100;
  public height: number = 100;
  constructor(@Inject(DOCUMENT) private document: Document,
  public dialog: MatDialog, private _adService: CampaignsService,
  private _getParam: ActivatedRoute, private _auth: AuthService) {
                // Al cargar la pagina verificamos si tiene algun parametro de descuento en nuestra campaña
                this._getParam.queryParams.subscribe(
                  (GET) => {
                    if (GET['from'] && ( GET['from'] !== undefined) && ( GET['from'] !== '')) {
                      if (GET['offer'] && (GET['offer'] !== undefined) && (GET['offer'] !== '')) {
                        // Si hay descuento de oferta entonces lo guardamos en el servicio
                        this._auth.DiscountBonus = new DiscountObject(GET['from'], GET['offer']);
                      }
                    }
                  }
                );
  }

  ngOnInit() {
    this.document.body.removeAttribute('class');
    this.document.body.classList.add('ads-theme-marketing');
    this.Device = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    if (this.Device.width <= 480) {
      this.ParticleStyle = ParticleStyle;
      this.particles = ParticleConfigMobile;
    } else {
      this.ParticleStyle = ParticleStyle;
      this.particles = ParticleConfigDesktop;
    }
  }
  ngOnDestroy() {
    this.document.body.removeAttribute('class');
  }

  OpenTrial(email: string = ''): void {
    // Limpiamos el body
    this.document.body.removeAttribute('class');
    // Desaparecemos el menu de la pagina para que no se muestre en el modal
    this._adService.showMenuCampaign = false;
    const dialogRef = this.dialog.open(MarketingModalComponent, {
      panelClass: ['dialog-resize-xl'],
      data: email,
      width: '100%',
      maxWidth: '100vw !important',
      minHeight: '100vh'
    });
    dialogRef.afterClosed().subscribe(
      () => {
        this.document.body.classList.add('ads-theme-marketing');
        this._adService.showMenuCampaign = true;
      }
    );
  }
  PrecreatedEmail(valueOf: NgForm): void {
    if (valueOf.invalid) {
      throw new Error('Form invalid');
    }
    console.log(valueOf.value);
    // Mandamos el email y abrimos el popup
    this.OpenTrial(valueOf.value.email);
  }
}
