import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import QRCode from "../../public/img/QR.png";

function Ticket(props) {
  const { t } = useTranslation("common");
  return (
    <div className="max-w-sm h-max bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="mt-8 p-5 text-center">
        <h1 className="mb-4 text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
          {t("ticket_title")}
        </h1>
        <p>{t("ticket_price")}</p>
        <div />
        <div className="w-1/2 mx-auto">
          <h2 className="my-4 font-bold">{t("qr")}</h2>
          <Image className="w-1/2" src={QRCode} alt="QR Code" />
        </div>
      </div>
      <div className="p-5 mb-8 text-center">
        <a
          href="https://wa.me/message/2DW2QWGHDACTM1"
          aria-label="buy a ticket"
          rel="noopener noreferrer"
          target="_blank"
          className="py-4 px-8  rounded font-base bg-green-600 hover:bg-green-700 text-white "
        >
          {t("ticket_btn")}
        </a>
      </div>
    </div>
  );
}

export default Ticket;
