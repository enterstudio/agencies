import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
      { path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }
    ]),
    TransferHttpCacheModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
