import { HttpClient } from "@angular/common/http/";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-home",
  template: `
    <h3>{{ message }}</h3>
    <div *ngFor="let a of agencies$ | async">
      <a href="{{ a.wikiURL }}"> {{ a.name }} </a>
    </div>`
})
export class HomeComponent implements OnInit {
  public message: string;
  public agencies$;

  private readonly url = "https://launchlibrary.net/1.4/agency";

  constructor(private http: HttpClient) {
    this.agencies$ = this.http.get(this.url).pipe(map((r: any) => r.agencies));
  }

  ngOnInit() {
    this.message = "Agencies";
  }
}
