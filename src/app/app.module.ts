import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';

//validator
import { EqualValidator } from "./validators/retype_pass";
import { KiemTraTuoiValidator } from "./validators/test_validate";


// Page
import { PageTrangchuComponent } from './Page/p_trang_chu/p_trang_chu.component';
import { PagepsingleproductComponent } from './Page/p_single_product/p_single_product.component';
import { PageCartComponent } from './Page/p_cart/p_cart.component';
import { PageShopComponent } from './Page/p_shop/p_shop.component';
import { PageCheckoutComponent } from './Page/p_checkout/p_checkout.component';
import { PageRegisterComponent } from './Page/p_register/p_register.component';

//Page con Trang chu
import { TcBrandcomponent } from './Page/p_trang_chu/tc_brands/tc_brands.component';
import { TcMaincontentComponent } from './Page/p_trang_chu/tc_maincontent/tc_maincontent.component';
import { TcMenuComponent } from './Page/p_trang_chu/tc_menu/tc_menu.component';

import { TcProductComponent } from './Page/p_trang_chu/tc_product/tc_product.component';
import { TCProductLeftComponent } from "./Page/p_trang_chu/tc_product/tc_product_left/tc_product_left.component";
import { TCProductCenterComponent } from "./Page/p_trang_chu/tc_product/tc_product_center/tc_product_center.component";
import { TCProductRightComponent } from "./Page/p_trang_chu/tc_product/tc_product_right/tc_product_right.component";

import { TcPromoComponent } from './Page/p_trang_chu/tc_promo/tc_promo.component';
import { TcSliderComponent } from './Page/p_trang_chu/tc_Slider/tc_Slider.component';
//end page trang chu


//page con cua Single Product
import { SpMenucomponent } from './Page/p_single_product/sp_menu/sp_menu.component';
import { SpProductAreacomponent } from './Page/p_single_product/sp_productArea/sp_productArea.component';
import { SideBarLeftSingleProductComponent } from "./Page/p_single_product/sp_productArea/side_bar_left/side_bar_left_single_product.component";
//end page con cua Single Product


//page con cua Shop
import { ShopMenucomponent } from './Page/p_shop/shop_menu/shop_menu.component';
import { ShopProductAreacomponent } from './Page/p_shop/shop_productArea/shop_productArea.component';
//end page con cua Shop

//page con cua checkOut
import { ChkOutMenucomponent } from './Page/p_checkout/chkOut_menu/chkOut_menu.component';
import { ChkOutProductAreacomponent } from './Page/p_checkout/chkOut_productArea/chkOut_productArea.component';
//end page con cua checkOut


//page con cua checkOut
import { CartMenucomponent } from './Page/p_cart/cart_menu/cart_menu.component';
import { CartProductAreacomponent } from './Page/p_cart/cart_productArea/cart_productArea.component';
//end page con cua checkOut

// end Page



// Header
import { WheaderComponent } from './widget/w_header/w_header.component';
import { TopHeaderComponent } from './widget/w_header/topheader/topheader.component';
import { BottomComponent } from './widget/w_header/bottomheader/bottomheader.component';
// end header


// footer
import { WFooterComponent } from './widget/w_footer/w_footer.component';
import { TopfooterComponent } from './widget/w_footer/top_footer/top_footer.component';
import { BottomfooterComponent } from './widget/w_footer/bottom_footer/bottom_footer.component';
// end footer

//Menu
import { W_MenuComponent } from './widget/w_menu/w_menu.component';


//list module
import { ModuleSearchProductComponent } from "./modules/m_search_product/m_search_product.component";
import { MTestComponent } from './modules/m_test/m_test.component';

//
@NgModule({
  declarations: [
    AppComponent,

    EqualValidator, KiemTraTuoiValidator,

    PageTrangchuComponent, PagepsingleproductComponent, PageCartComponent, PageShopComponent, PageCheckoutComponent,
    PageRegisterComponent,

    TcBrandcomponent, TcMaincontentComponent, TcMenuComponent, TcProductComponent,
    TcPromoComponent, TcSliderComponent, TCProductLeftComponent, TCProductCenterComponent, TCProductRightComponent,

    SpMenucomponent, SpProductAreacomponent, SideBarLeftSingleProductComponent,

    ShopMenucomponent, ShopProductAreacomponent,
    ChkOutMenucomponent, ChkOutProductAreacomponent,
    CartMenucomponent, CartProductAreacomponent,
    WheaderComponent, TopHeaderComponent, BottomComponent,
    WFooterComponent, TopfooterComponent, BottomfooterComponent,
    W_MenuComponent,

    ModuleSearchProductComponent, MTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
