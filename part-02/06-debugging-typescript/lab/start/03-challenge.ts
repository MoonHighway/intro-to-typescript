type PaymentTypes = "credit" | "debit" | "paypal";

class PaymentMethod {
  public readonly type: PaymentTypes;
  public readonly institution: string;
  public readonly cardHolderName: string;

  constructor({
    type,
    institution,
    cardHolderName,
  }: {
    type: PaymentTypes;
    institution: string;
    cardHolderName: string;
  }) {
    this.type = type;
    this.institution = institution;
    this.cardHolderName = cardHolderName;
  }
}

const paymentData = {
  type: "credit",
  institution: "Bank of America",
  cardHolderName: "Xiu Liú",
};

const paymentMethod = new PaymentMethod(paymentData);

console.log(paymentMethod);
