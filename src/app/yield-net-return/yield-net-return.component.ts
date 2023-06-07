import { Component } from '@angular/core';

interface FormValues {
  purchasePrice: number;
  monthlyRent: number;
}

const AGENCY_FEES = [0.30, 0.25, 0.20];

@Component({
  selector: 'app-yield-net-return',
  templateUrl: './yield-net-return.component.html',
  styleUrls: ['./yield-net-return.component.scss'],
})
export class YieldNetReturnComponent {

  netReturn: any = null;
  purchasePriceValue: number = 0;
  monthlyRentValue: number = 0;
  annualFeeValue: number = 0;

  updateAnnualFee() {
    if (this.monthlyRentValue >= 0 && this.purchasePriceValue >= 0)
      this.annualFeeValue = ( (this.monthlyRentValue * 12) / this.purchasePriceValue ) * 100;
  }

  updateMonthlyRent () {
    if (this.annualFeeValue >= 0 && this.purchasePriceValue >= 0)
      this.monthlyRentValue = ((this.annualFeeValue * this.purchasePriceValue) / 12) / 100;
  }

  calculateReturn(formValues: FormValues) {
    const { purchasePrice, monthlyRent } = formValues;
    if (monthlyRent <= 0 || purchasePrice <= 0) {
      console.error('monthlyRent y purchasePrice need to be more than 0.');
      return;
    }

    const annualRent = monthlyRent * 12;
    let netIncomes = AGENCY_FEES.map(fee => Math.round((annualRent * (1 - fee)) * 100) / 100);
    let ROIs = netIncomes.map(income => Math.round(((income / purchasePrice) * 100) * 100) / 100);


    this.netReturn = {
      monthlyNetIncome: netIncomes,
      threeYearReturn: ROIs
    };
  }

}
