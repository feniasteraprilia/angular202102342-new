import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnDefs" :
        [
          {
            "targets" : 2,
            "className" : "text-right"
          }
        ]
      }
    );
    
    this.getData();
  }

  ngOnInit(): void {
  }

  getData(): void {
    console.log("getData()");

    var url ="https://openexchangerates.org/api/latest.json?app_id=91cb1ee51df345ba9718dfd92ec16602";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [1, "USD", idr2 ];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [2, "SGD", sgd2 ];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [3, "BND", bnd2 ];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [4, "HKD", hkd2 ];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [5, "BTC", btc2 ];
      this._table1.row.add(row);

      var krw = rates.IDR / rates.KRW;
      var krw2 = formatCurrency(krw, "en-US", "", "KRW");
      console.log("KRW : " + krw2);
      var row = [6, "KRW", krw2 ];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, "en-US", "", "JPY");
      console.log("JPY : " + jpy2);
      var row = [7, "JPY", jpy2 ];
      this._table1.row.add(row);

      var gbp = rates.IDR / rates.GBP;
      var gbp2 = formatCurrency(gbp, "en-US", "", "GBP");
      console.log("GBP : " + gbp2);
      var row = [8, "GBP", gbp2 ];
      this._table1.row.add(row);

      var khr = rates.IDR / rates.KHR;
      var khr2 = formatCurrency(khr, "en-US", "", "KHR");
      console.log("KHR : " + khr2);
      var row = [9, "KHR", khr2 ];
      this._table1.row.add(row);

      var ils = rates.IDR / rates.ILS;
      var ils2 = formatCurrency(ils, "en-US", "", "ILS");
      console.log("ILS : " + ils2);
      var row = [10, "ILS", ils2 ];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }

}
