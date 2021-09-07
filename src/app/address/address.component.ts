import { APP_BOOTSTRAP_LISTENER, Component, OnInit, ViewChild } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { apiBaseUrl } from '../app.module'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: [],
})
export class AddressComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

  @ViewChild('items') items!: HTMLUListElement;

  public searchText?: string
  public data?: any

  private handle?: number
  private subscription?: Subscription
  public search(): void {
    window.clearTimeout(this.handle)
    this.subscription?.unsubscribe()
    this.handle = window.setTimeout(() => {
      this.subscription = this.http
        .get(`${apiBaseUrl}addresses/gb/+/${this.searchText}`)
        .subscribe((data) => {
          this.data = data;
          console.log("i", this.items);
        })
    }, 250)
  }

  ngOnInit(): void {}
}
