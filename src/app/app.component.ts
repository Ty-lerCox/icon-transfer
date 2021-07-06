import { Component, OnInit } from "@angular/core";
import { SeoService } from "./seo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Icon Concrete";

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.createLinkForCanonicalURL();
  }

  createLinkForCanonicalURL() {
    this.seoService.createLinkForCanonicalURL();
  }
}
