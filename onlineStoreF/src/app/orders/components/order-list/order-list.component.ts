import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {Orderline} from '../../model/orderline';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  order: Order;
  orderLines: Orderline[];
  orderLine: Orderline;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getOrderByUsername('iulia');
  }

  // tslint:disable-next-line:typedef
  getOrderByUsername(username: string) {
    this.orderService.getByUsername(username).subscribe(data => {
      this.order = data;
    });
  }


  // tslint:disable-next-line:typedef
  getOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }


// tslint:disable-next-line:typedef
  public update(username: string, idOrderLine: number, newQuantity: number) {
    this.orderService.update(username, idOrderLine, newQuantity).subscribe(data => {
      this.getOrders();
    });

  }

  // tslint:disable-next-line:typedef
}
