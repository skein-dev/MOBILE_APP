import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    redirectTo: 'phone-number',
    pathMatch: 'full'
  },    
    
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'phone-number',
    loadChildren: () => import('./phone-number/phone-number.module').then( m => m.PhoneNumberPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'map-view',
    loadChildren: () => import('./map-view/map-view.module').then( m => m.MapViewPageModule)
  },
  {
    path: 'service-providers',
    loadChildren: () => import('./service-providers/service-providers.module').then( m => m.ServiceProvidersPageModule)
  },
  {
    path: 'salon-profile',
    loadChildren: () => import('./salon-profile/salon-profile.module').then( m => m.SalonProfilePageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('./book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'confirm-booking',
    loadChildren: () => import('./confirm-booking/confirm-booking.module').then( m => m.ConfirmBookingPageModule)
  },
  {
    path: 'booking-confirmed',
    loadChildren: () => import('./booking-confirmed/booking-confirmed.module').then( m => m.BookingConfirmedPageModule)
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
  },
  {
    path: 'appointment-info',
    loadChildren: () => import('./appointment-info/appointment-info.module').then( m => m.AppointmentInfoPageModule)
  },
  {
    path: 'rate-now',
    loadChildren: () => import('./rate-now/rate-now.module').then( m => m.RateNowPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'my-reviews',
    loadChildren: () => import('./my-reviews/my-reviews.module').then( m => m.MyReviewsPageModule)
  },
  {
    path: 'connect-us',
    loadChildren: () => import('./connect-us/connect-us.module').then( m => m.ConnectUsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
