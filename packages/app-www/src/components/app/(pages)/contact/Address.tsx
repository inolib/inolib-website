import { Link } from "~/components/link";

import MarkerPinSquaredIcon from "#/images/icons/squared/marker-pin-02.svg";
import MessageSmileCircleSquaredIcon from "#/images/icons/squared/message-smile-circle.svg";
import PhoneSquaredIcon from "#/images/icons/squared/phone.svg";

export const Address = () => {
  const address = [
    {
      icon: <MessageSmileCircleSquaredIcon className="size-12" />,
      title: "Écrivez-nous à",
      content: (
        <Link
          _color="transparent"
          _shape="link"
          className="font-semibold text-blue-700 focus-visible:outline-blue-700"
          href="mailto:contact@inolib.com"
        >
          contact@inolib.com
        </Link>
      ),
    },
    {
      icon: <PhoneSquaredIcon className="size-12" />,
      title: "Appelez-nous au",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            <Link
              _color="transparent"
              _shape="link"
              className="font-semibold text-blue-700 focus-visible:outline-blue-700"
              href="tel:+33647218669"
            >
              +33 6 47 21 86 69
            </Link>
          </p>

          <p>Du lundi au vendredi de 8 h à 17 h.</p>
        </div>
      ),
    },
    {
      icon: <MarkerPinSquaredIcon className="size-12" />,
      title: "Adresse",
      content: (
        <Link
          _color="transparent"
          _shape="link"
          className="inline-block w-40 font-semibold text-blue-700 focus-visible:outline-blue-700"
          href="https://maps.app.goo.gl/UigmsjkNZMjPSbnr9"
        >
          254 rue Vendôme 69003 Lyon
        </Link>
      ),
    },
  ];

  return (
    <address className="flex flex-col gap-4 not-italic">
      {address.map((item, index) => (
        <div className="flex flex-col gap-4 rounded-3xl bg-blue-50 p-6" key={index}>
          <div>{item.icon}</div>

          <div>
            <p className="font-bold">{item.title}</p>
            {item.content}
          </div>
        </div>
      ))}
    </address>
  );
};
