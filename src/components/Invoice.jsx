import React from "react";
import Logo from "../assets/images/logo.png";

const Invoice = () => {
  const invoiceDetails = {
    from: {
      name: "VFLuminaire india Pvt. Ltd.",
      date: "02/07/2023",
      gst: "32DQUPK9780E1Z9",
      address:
        "Ground floor , VP 11/866 Menon Nagar Indira Navagr Road Perookada Thiruvananthapuram Kerala 695005",
    },

    to: {
      name: "VFLuminaire india Pvt. Ltd.",
      date: "02/07/2023",
      gst: "32DQUPK9780E1Z9",
      address:
        "Ground floor , VP 11/866 Menon Nagar Indira Navagr Road Perookada Thiruvananthapuram Kerala 695005",
      delivery: {
        location: "kochi",
      },
    },
    products: [
      {
        id: 1,
        name: "600W bi color LED spotloght",
        unitPerCost: 855,
        qty: 6,
      },
      {
        id: 2,
        name: "300W bi color LED spotloght",
        unitPerCost: 600,
        qty: 4,
      },
      {
        id: 3,
        name: "600W RGB panel",
        unitPerCost: 1125,
        qty: 4,
      },
    ],
    discount: 10,
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-2">
      <div className="flex flex-col gap-4 h-auto w-auto text-black p-2 bg-[#9fcaff]">
        <div className="flex justify-between items-start">
          <img src={Logo} className="w-1/4" />
          <div className="text-[15px] w-2/4">
            <p className="">
              From :{" "}
              <span className="font-semibold">VFLuminaire india Pvt. Ltd.</span>
            </p>
            <p>
              Date : <span className="font-semibold"> 02/07/2023</span>
            </p>
            <p className="">
              Address :
              <span className="font-semibold">
                {" "}
                Ground floor , VP 11/866 Menon Nagar Indira Navagr Road
                Perookada Thiruvananthapuram Kerala 695005
              </span>
            </p>
            <p>
              GST number :{" "}
              <span className="font-semibold">32DQUPK9780E1Z9</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-start justify-start">
          <div className="flex flex-col w-2/4 justify-between items-start">
            <p className="">
              To :{" "}
              <span className="font-semibold">VFLuminaire india Pvt. Ltd.</span>
            </p>
            <p>
              Date : <span className="font-semibold"> 02/07/2023</span>
            </p>
            <p className="">
              Address :
              <span className="font-semibold">
                {" "}
                Ground floor , VP 11/866 Menon Nagar Indira Navagr Road
                Perookada Thiruvananthapuram Kerala 695005
              </span>
            </p>
            <p>
              GST number :{" "}
              <span className="font-semibold">32DQUPK9780E1Z9</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">Delivery</p>
            <p>
              Location <span className="font-semibold"> : Kochi</span>
            </p>
          </div>
        </div>
        <hr />
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Description
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Unit per cost
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Qty
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        600W bi color LED spotloght
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$855</td>
                      <td class="whitespace-nowrap px-6 py-4">6</td>
                      <td class="whitespace-nowrap px-6 py-4">$5130</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        300W bi color LED spotloght
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$600</td>
                      <td class="whitespace-nowrap px-6 py-4">4</td>
                      <td class="whitespace-nowrap px-6 py-4">$2400</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        600W RGB panel
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$1125</td>
                      <td class="whitespace-nowrap px-6 py-4">4</td>
                      <td class="whitespace-nowrap px-6 py-4">$4500</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        -Discount
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$4530</td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4">SUBTOTAL</td>
                      <td class="whitespace-nowrap px-6 py-4">$7500</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4">TAX</td>
                      <td class="whitespace-nowrap px-6 py-4">$1350</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4">
                        TOTAL RENT PER DAY
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$8850</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4">
                        TOTAL RENT FOR (9 DAY)
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">$79650</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4"></td>
                      <td class="whitespace-nowrap px-6 py-4">GREND TOTAL</td>
                      <td class="whitespace-nowrap px-6 py-4">$79650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
