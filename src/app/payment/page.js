"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const Payment = () => {
  const [isClient, setIsClient] = useState(false);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const priceParam = searchParams.get('price');
    if (priceParam) {
      setPrice(priceParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const loadGooglePayScript = () => {
      const script = document.createElement("script");
      script.src = "https://pay.google.com/gp/p/js/pay.js";
      script.async = true;
      script.onerror = () => {
        setError("Error loading Google Pay script.");
      };
      document.body.appendChild(script);
    };
    loadGooglePayScript();
  }, []);

  const onGooglePayClick = () => {
    if (!price) return;

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: "PRODUCTION",
    });

    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "your_gateway",
              gatewayMerchantId: "your_merchant_id",
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: "your_merchant_id",
        merchantName: "Your Merchant Name",
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPrice: price,
        currencyCode: "USD",
        countryCode: "US",
      },
    };

    paymentsClient
      .isReadyToPay(paymentRequest)
      .then((response) => {
        if (response.result) {
          paymentsClient.loadPaymentData(paymentRequest).then((paymentData) => {
            console.log("Payment successful:", paymentData);
          }).catch((error) => {
            setError("Error loading payment data.", error);
          });
        } else {
          setError("Google Pay is not available.");
        }
      })
      .catch((error) => {
        setError("Error initializing Google Pay.", error);
      });
  };

  if (!isClient) {
    return null;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!price) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-purple-400/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.2, 1, 1.2] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-pink-400/20 blur-3xl"
        />
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="p-10 bg-white/90 backdrop-blur-lg shadow-xl rounded-lg max-w-md text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6">Proceed to Payment</h2>
          <p className="text-gray-600 mb-6">Complete your payment to access your plan.</p>
          <p className="text-xl font-bold mb-6">Amount: ${price}</p>
          <button
            onClick={onGooglePayClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            Pay Now with Google Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
