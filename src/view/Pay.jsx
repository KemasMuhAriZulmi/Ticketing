import { useEffect } from "react";

const Pay = () => {
  useEffect(() => {});
  return (
    <div className="w-10/12 mx-auto my-12 shadow-2xl rounded-xl p-3 max-w-md">
      <div className="text-center text-orange-800 font-bold text-[32px]">
        <h1>0:57:38</h1>
      </div>
      <h1 className="text-[#294A62] font-bold text-center">
        Segera selesaikan pembayaran anda!
      </h1>
      <p className="text-slate-400 text-center">Terima Kasih</p>
      <h1 className="text-[#294A62] font-bold text-center text-[12px]">
        Detail Transaction:
      </h1>
      <div className="pl-8 pr-8 my-4 text-[14px]">
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Name</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">Anjay</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Email</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">Email</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">No. Handphone</div>
          <div className="w-2/6 text-center">:</div>
          <div className="w-full">Anjay</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Event</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">Eventod</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Total Dibayar</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">Anjay</div>
        </div>
        <div className="flex justify-between py-2">
          <div className="w-full font-medium">Payment Method</div>
          <div className="w-2/6  text-center">:</div>
          <div className="w-full">Anjay</div>
        </div>
      </div>
      <h1 className="text-center text-[#163954] font-bold text-sm">
        Confirm Payment:
      </h1>
      <div className="w-4/6 mx-auto mt-4 pb-4">
        <button className="w-full bg-[#163954] text-white py-2 rounded-md transition duration-300 hover:bg-[#122b3b] focus:outline-none focus:ring focus:border-[#122b3b] active:bg-[#0d1e2b]">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Pay;
