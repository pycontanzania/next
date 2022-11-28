import Image from "next/image";
import QRCode from "../../public/img/QR.png";
import useTranslation from "next-translate/useTranslation";


function Ticket(props) {
  const { t, lang } = useTranslation("speak");
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 text-center">
        <h1 className="mb-4 text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
          {t("ticket_title")}
        </h1>
        <p>{t("ticket_price")}</p>
        <div />
        <div className="w-1/2 mx-auto">
          <h2 className="my-4 font-bold">{t("qr")}</h2>
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
          {t("sms_details")}
        </p>
      </div>
    </div>
  );
}

export default Ticket;
