import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './courses.css';
import jsPDF from 'jspdf';
export default function Courses() {
  const [users, setUsers] = useState([]);
  const [invoiceData, setInvoiceData] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);
  function generateInvoicePDF(response, course) {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text("Course Payment Invoice", 20, 20);
  doc.setFontSize(12);
  doc.text(`Course Name: ${course.course_name}`, 20, 40);
  doc.text(`Amount Paid:  Rs${course.course_price}`, 20, 50);
  doc.text(`Duration: ${course.course_duration} Months`, 20, 60);
  doc.text(`Payment ID: ${response.razorpay_payment_id}`, 20, 80);
  doc.text(`Order ID: ${response.razorpay_order_id || "Not Provided"}`, 20, 90);
  // doc.text(`Signature: ${response.razorpay_signature || "Not Provided"}`, 20, 100);
  doc.text(`Date: ${new Date().toLocaleString()}`, 20, 120);
  doc.save(`${course.course_name}_invoice.pdf`);
}
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:2006/get", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handlePayment = async (course) => {
    try {
      const res = await fetch("http://localhost:2006/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: course.course_price }),
      });
      const order = await res.json();
      const options = {
        key: "rzp_test_faCruggaG7OAQz",
        amount: course.course_price*100,
        currency: "INR",
        name: course.course_name,
        description: `Payment for ${course.course_name}`,
        order_id: order.id,
        handler: function (response) {
          setInvoiceData({response,course});
          setShowInvoice(true);
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
          contact: "9000090000",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800" id="heading-course">
          Full-Fledged IT Training By Industry Expert
        </h1>
        <div className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded" id="hover-block">
          Mode: Online | Offline · Language: Hindi | English · Duration: 2 to 6 Months
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {users.map((user, index) => (
          <motion.div
            key={index}
            id="course-card"
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300"
          >
            <img
              src={user.img_address}
              alt={user.course_name}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="under-text">{user.course_name}</h3>
            <p className="under-text">₹ {user.course_price}/-</p>
            <p className="under-text">{user.course_duration} Months</p>
            <button
              onClick={() => handlePayment(user)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded mt-4"
            >
              Pay Now
            </button>
          </motion.div>
        ))}
      </div>
      {showInvoice && invoiceData && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded shadow-lg w-[90%] max-w-md relative">
      <h2 className="text-xl font-bold mb-4 text-center">Payment Invoice</h2>
      <p><strong>Course:</strong> {invoiceData.course.course_name}</p>
      <p><strong>Amount:</strong> ₹{invoiceData.course.course_price}</p>
      <p><strong>Duration:</strong> {invoiceData.course.course_duration} Months</p>
      <p><strong>Payment ID:</strong> {invoiceData.response.razorpay_payment_id}</p>
      <p><strong>Order ID:</strong> {invoiceData.response.razorpay_order_id || "Not Provided"}</p>
      {/* <p><strong>Signature:</strong> {invoiceData.response.razorpay_signature || "Not Provided"}</p> */}
      <p><strong>Date:</strong> {new Date().toLocaleString()}</p>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => {
            generateInvoicePDF(invoiceData.response, invoiceData.course);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded">
          Download PDF
        </button>
        <button
          onClick={() => setShowInvoice(false)}
          className="bg-gray-400 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
