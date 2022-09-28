import React from "react";
import "../DownloadApp/styles.css";

export const DownloadApp = () => {
  return (
    <div className="download-section">
      <h2>AINDA NÃO POSSUI O TELEGRAM? BAIXE AGORA PARA O SEU DISPOSITIVO!</h2>
      <div className="download-btns">
        <a
          href="https://apps.apple.com/br/app/telegram-messenger/id686449807"
          target={"_blank"}
        >
          <img
            src="https://i.imgur.com/cxmPWb2.png"
            alt="Disponível na App Store"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
          target={"_blank"}
        >
          <img
            src="https://i.imgur.com/q7HwVrM.png"
            alt="Disponível no Google Play"
          />
        </a>
      </div>
    </div>
  );
};
