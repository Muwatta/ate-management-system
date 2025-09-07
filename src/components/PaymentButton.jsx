'use client';
export default function PaymentButton({ amount, onPay }) {
  return (
    <button
      className="bg-green-600 text-white px-4 py-2 rounded"
      onClick={onPay}
    >
      Pay ₦{amount}
    </button>
  );
}
