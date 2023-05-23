import { Component, ViewChild } from "@angular/core";
import { Grid, Representative } from "./customer";
import { CustomerService } from "./customerservice";
import { FilterMatchMode, FilterService, MessageService, SelectItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [MessageService]
})
export class AppComponent {
  customers: Grid[];
  prefix:string ='=';
  loading: boolean = true;
  numericMatchModeOptions: SelectItem[];

  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService, private filterService: FilterService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        customer => {
          if(customer.lastConnectionDate){
            (customer.lastConnectionDate = new Date(customer.lastConnectionDate))
          }
          // if(customer.runtime){
          //   customer.runtime = parseFloat(customer.runtime.toFixed(2));
          // }
        }
      );
    });
    const customFilterName = 'decimalEquals';

    this.filterService.register(customFilterName, (value: number,filter: string): boolean => {
      if (filter === undefined || filter === null || filter.toString().trim() === '') {
        return true;
    }
    if (value === undefined || value === null) {
        return false;
    }
    return (value.toFixed(2)).toString() === filter.toString();
    });
    this.numericMatchModeOptions = [
      { label: "Less Than", value: FilterMatchMode.LESS_THAN },
      { label: "Greater Than", value: FilterMatchMode.GREATER_THAN },
      { label: "Equals", value: customFilterName}
    ];

  }
}
