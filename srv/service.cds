
using{API_SALES_QUOTATION_SRV} from './external/API_SALES_QUOTATION_SRV';

service MyService {
    entity A_Sales_Quotation as projection on API_SALES_QUOTATION_SRV.A_SalesQuotation;

    

}