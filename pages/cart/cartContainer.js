import { Query } from "react-apollo";
import CartPresenter from "./cartPresenter";
import { GET_PRODUCTS } from "./cartQueries";
import { supportedCards } from "../../payments";

export default class extends React.Component {
  render() {
    return (
      <Query query={GET_PRODUCTS}>
        {({ data }) => {
          this.cartInfo = data;
          return <CartPresenter data={data} onPay={this._onPay} />;
        }}
      </Query>
    );
  }
  _onPay = () => {
    const displayItems = this.cartInfo.cart.map(product => {
      return {
        label: product.name,
        amount: { currency: "USD", value: product.price }
      };
    });

    const totalPrice = this.cartInfo.cart.reduce(
      (price, product) => price + product.price,
      0
    );

    const paymentRequest = new PaymentRequest(supportedCards, {
      displayItems,
      total: {
        label: "Total due",
        amount: { currency: "USD", value: totalPrice }
      }
    });
    paymentRequest
      .show()
      .then(json => console.log(json))
      .catch(error => console.log("Payment cancelled"));
  };
}
