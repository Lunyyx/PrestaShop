import OrderStatusData from '@data/faker/orderStatus';

export default {
  awaitingCheckPayment: new OrderStatusData({
    id: 1,
    name: 'Awaiting check payment',
    sendEmailOn: true,
    deliveryOn: false,
    invoiceOn: false,
    emailTemplate: 'cheque',
  }),
  paymentAccepted: new OrderStatusData({
    id: 2,
    name: 'Payment accepted',
    sendEmailOn: true,
    deliveryOn: false,
    invoiceOn: true,
    emailTemplate: 'payment',
  }),
  shipped: new OrderStatusData({
    id: 4,
    name: 'Shipped',
    sendEmailOn: true,
    deliveryOn: true,
    invoiceOn: true,
    emailTemplate: 'shipped',
  }),
  delivered: new OrderStatusData({
    id: 5,
    name: 'Delivered',
    sendEmailOn: false,
    deliveryOn: true,
    invoiceOn: true,
    emailTemplate: '',
  }),
  canceled: new OrderStatusData({
    id: 6,
    name: 'Canceled',
    sendEmailOn: true,
    deliveryOn: false,
    invoiceOn: false,
    emailTemplate: 'order_canceled',
  }),
  paymentError: new OrderStatusData({
    id: 8,
    name: 'Payment error',
    sendEmailOn: true,
    deliveryOn: false,
    invoiceOn: false,
    emailTemplate: 'payment_error',
  }),
  awaitingBankWire: new OrderStatusData({
    id: 10,
    name: 'Awaiting bank wire payment',
    sendEmailOn: true,
    deliveryOn: false,
    invoiceOn: false,
    emailTemplate: 'bankwire',
  }),
  processingInProgress: new OrderStatusData({
    id: 3,
    name: 'Processing in progress',
    sendEmailOn: true,
    deliveryOn: true,
    invoiceOn: true,
    emailTemplate: 'preparation',
  }),
};
