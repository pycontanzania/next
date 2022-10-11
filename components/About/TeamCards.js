import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import profileImg from "../../public/img/profile.jpg";
function TeamCards(props) {
    return (
        <div className="my-16 grid place-items-center gap-x-16 gap-y-8 grid-cols-auto-fill">
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
        <div className="card">
          <div className="relative h-64 w-64">
            <Image
              src={profileImg}
              className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              layout="fill"
              objectFit="contain"
              alt="Profile Image"
            />

            <div className="inline-flex divide-x space-x-2 justify-between place-items-center absolute max-w-fit py-3 px-4  mx-auto left-0 right-0 bottom-0 text-center bg-green-600">
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="px-2 cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="card-content text-center mt-2 font-base">
            <h1 className="text-xl font-semibold">John Doe</h1>
            <p>Secretariate</p>
          </div>
        </div>
      </div>
    );
}

export default TeamCards;