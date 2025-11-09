const OrdersPage = () => {
  const orders = [
    {
      orderId: '134253465',
      date: '12.12.2022',
      price: '$25',
      products: 'Big burger Menu(2), pizza, coca cola',
      status: 'on the way',
    },
    {
      orderId: '134253466',
      date: '13.12.2022',
      price: '$40',
      products: 'Sushi, ramen, green tea',
      status: 'Delivered',
    },
    {
      orderId: '134253467',
      date: '14.12.2022',
      price: '$15',
      products: 'Chicken wings, fries',
      status: 'Delivered',
    },
    {
      orderId: '134253468',
      date: '15.12.2022',
      price: '$30',
      products: 'Pizza, salad',
      status: 'on the way',
    },
    {
      orderId: '134253469',
      date: '16.12.2022',
      price: '$50',
      products: 'Steak, mashed potatoes, wine',
      status: 'on the way',
    },
  ];

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order.orderId}
              className={`text-sm md:text-base ${index % 2 === 0 ? 'odd:bg-gray-100' : ''}`}
            >
              <td className="hidden md:block py-6 px-1">{order.orderId}</td>
              <td className="py-6 px-1">{order.date}</td>
              <td className="py-6 px-1">{order.price}</td>
              <td className="hidden md:block py-6 px-1">{order.products}</td>
              <td
                className={`py-6 px-1 ${
                  order.status === 'Delivered' ? 'text-green-400' : 'text-yellow-500'
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
