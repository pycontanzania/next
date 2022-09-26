import Image from "next/image";
import QRCode from "../../public/img/QR.png";


function Ticket(props) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 text-center">
        <h1 className="mb-4 text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
          Grab your ticket now
        </h1>
        <p>Ticket cost only 20,000 Tsh</p>
        <div />
        <div className="w-1/2 mx-auto">
          <h2 className="my-4 font-bold">Scan QR</h2>
          <Image
            className="w-1/2"
            src={QRCode}
            alt="QR Code"
          />
        </div>
      </div>
      <div className="p-5 text-center">
        <h2 className="my-4 font-bold">SMS</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Ticket;
