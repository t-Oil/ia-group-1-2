import {
  faMask,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://cdn.lorem.space/images/hotel/.cache/500x180/man-pan-KTSYy-3XVSo-unsplash.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">Examination</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 bg-slate-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" to="/hero">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-sm rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faMask} />
                  </div>
                  <h6 className="text-xl font-semibold uppercase">Heros</h6>
                </div>
              </div>
            </Link>


            <Link className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center" to="/posts">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-sm rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-sm rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faBullhorn} />
                  </div>
                  <h6 className="text-xl font-semibold uppercase">posts</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
