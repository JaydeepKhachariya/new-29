import { useState } from "react";
import { DateRangePicker } from "rsuite";
import axios from "axios";

const Checkout = ({ setIsCheckout }) => {
  const [date, setDate] = useState();

  console.log(date);

  const handleCreateOrder = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3000/createOrder", {
        amount: 500,
        name: "Dummy Product",
        description: "Dummy Product Description",
      });

      const {
        success,
        msg,
        order_id,
        amount,
        key_id,
        product_name,
        description,
        contact,
        name,
        email,
      } = response.data;

      if (success) {
        // Handle successful response
        console.log("Order created:", order_id);
        console.log("Amount:", amount);
        console.log("Key ID:", key_id);
        console.log("Product Name:", product_name);
        console.log("Description:", description);
        console.log("Contact:", contact);
        console.log("Name:", name);
        console.log("Email:", email);
      } else {
        // Handle error response
        console.log("Error:", msg);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="bg-[##000000b5] backdrop-blur-md w-full h-full flex justify-center items-center absolute top-0 left-0 mx-auto">
        <div className="w-2/4 h-auto bg-white rounded-md shadow-md p-4 flex flex-col item-center overflow-y-auto">
          <form className=" flex flex-col justify-start relative gap-6 items-center h-auto w-[80%] ml-[10%] rounded-lg">
            <h1 className="text-[45px] font-bold">Way to checkout</h1>
            <div className="flex items-center justify-between w-full gap-3">
              <input
                placeholder="Name"
                className="bg-blue-50 w-full px-10 py-6 rounded-md border-blue-100 border outline-none"
              />
              {/* <input
                placeholder="Last name"
                className="bg-blue-50 w-[49%] px-10 py-6 rounded-md border-blue-100 border outline-none"
              /> */}
            </div>
            <div className="flex items-center justify-between w-full gap-3">
              <input
                placeholder="Location"
                className="bg-blue-50 w-[30%] px-10 py-6 rounded-md border-blue-100 border outline-none"
              />
              <input
                placeholder="GST number"
                className="bg-blue-50 w-[68%] px-10 py-6 rounded-md border-blue-100 border outline-none"
              />
            </div>
            <input
              placeholder="Address"
              className="w-full bg-blue-50 py-6 px-10 rounded-md border-blue-100 border outline-none"
            />
            {/* <div className="flex items-center justify-center gap-3">
              <input type="date" name="" id="" />
              to
              <input type="date" name="" id="" />
            </div> */}
            {/* {dateModel ? (
              <div className="absolute h-full w-full bg-black flex items-center justify-center">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </div>
            ) : null} */}
            <DateRangePicker onChange={(e) => setDate(e)} />
            <div className="flex items-center justify-center gap-4 w-full">
              <button
                // onClick={handleCreateOrder}
                className="bg-[#0051b6] w-[30%] text-white border-none px-12 py-4 shadow-lg rounded-full text-lg  submitBtn"
              >
                Submit
              </button>
              <button
                onClick={() => setIsCheckout(false)}
                className="bg-red-600 w-[30%] text-white border-none px-12 py-4 shadow-lg rounded-full text-lg  submitBtn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
