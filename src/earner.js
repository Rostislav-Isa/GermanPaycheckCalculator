/**
 * This class contains all paycheck data of an Employee.
 */
class Earner {
  /**
   *
   * @param {string} incomeCents - The annual income in Eurocents
   * @param {string} taxClass - The tax class. Unmarried employees usually choose the class "1".
   */
  constructor(incomeCents, taxClass) {
    this.API_PATH =
      "http://www.bmf-steuerrechner.de/interface/2024Version1.xhtml";
    this.CODE = "2024ESSt";
    this.incomePaymentPeriod = "1"; //1 year

    this.incomeCents = incomeCents;
    this.taxClass = taxClass;
  }

  /**
   * Calls API from allorigins.win that calls the API to the German Federal Ministry of Finance.
   * @returns the response from allorigins
   */
  async callAPI() {
    let endpoint = `${this.API_PATH}?code=${this.CODE}&LZZ=${this.incomePaymentPeriod}&RE4=${this.incomeCents}&STKL=${this.taxClass}`;

    //To avoid the CORS error, we use/trust allorigins.win to circumvent the restriction
    return fetch(`https://api.allorigins.win/get?url=${endpoint}`, {
      method: "GET",
    });
  }
}

module.exports = Earner;
