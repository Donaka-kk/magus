export interface GiftCardType {
   minimalPurchase: number;
   maximalPurchase: number;
   dicount: number;
   used: boolean;
   code: string;
   subject: string;
   beginningDate: string;
   expirationDate: string;
}
