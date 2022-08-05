import { Title } from "components";
import { contacts } from "mocks";
import { Template } from "template";

function Contact() {
  const { name, networks } = contacts;

  return (
    <Template>
      <Title>
        Contact-me
      </Title>
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-40 smd:w-96 animate-fadeIn bg-white">
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">
            {name}
          </p>
          <br />
          {networks.map(({ title, href }) => (
            <p className="text-gray-700 text-base">
              <a href={href} target="_blank">
                {title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </Template>
  );
}

export default Contact;