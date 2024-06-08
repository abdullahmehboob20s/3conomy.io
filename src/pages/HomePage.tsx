import Icons from "@/components/Icons";
import images from "@/lib/images";
import { Link } from "react-router-dom";

interface IconTextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  text: string;
}

const IconText = ({ Icon, text }: IconTextProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="h-4 w-4" />
      <p>{text}</p>
    </div>
  );
};

export function HomePage() {
  return (
    <>
      <div className="absolute top-0 left-0 w-[622px] h-[622px] rounded-full bg-rainbow -translate-x-1/2 blur-[320px] opacity-30 pointer-events-none z-10"></div>

      <div className="max-w-[1440px] mx-auto w-[90%] py-14 min-h-screen flex flex-col justify-center relative z-50">
        <img
          src={images["logo-text"]}
          className="absolute top-16 left-0 h-9"
          alt=""
        />

        <main className="grid grid-cols-2 gap-20">
          <div className="py-14 flex flex-col justify-between space-y-20">
            <div>
              <h1 className="text-7xl mb-9">
                Silicon Valley <br />
                Meets wall Street
              </h1>

              <div className="flex items-center space-x-6">
                <IconText Icon={Icons.happyUser} text="94% Happy Users" />
                <IconText Icon={Icons.thunder} text="Fast & Secure" />
                <IconText Icon={Icons.team} text="Professional Team" />
              </div>
            </div>

            <div className="text-3xl space-y-5">
              <Icons.brandStar />
              <p>
                The Next <br />
                Generation <br />
                FintechOS
              </p>
            </div>
          </div>

          <aside>
            <div className="relative w-fit mx-auto">
              <main className="max-w-[24rem] mx-auto w-full rounded-[32px] bg-white/[0.04] p-10 pb-3 pt-8 px-3 shadow-[-40px_54px_184px_rgba(0,0,0,.56),inset_0px_84px_174px_-20px_rgba(255,255,255,.2)] backdrop-blur-[124px]">
                <h2 className="text-3xl text-center mb-2">Scan QR Code</h2>
                <p className="text-center text-lg opacity-50">
                  scan this QR code in app to verify device
                </p>

                <Icons.blob className="absolute bottom-[10%] left-0 -translate-x-[66%] w-[208px]" />

                <Icons.blob className="absolute top-[0%] right-0 translate-x-[56%] w-[90px] rotate-[-20deg] drop-shadow-[0_0_4rem_#45DC9C]" />

                {/* <Icons.blobWhite className="absolute top-[-50%] right-0 translate-x-[54%] w-[560px]" /> */}

                <div className="mt-6 bg-background p-14 rounded-2xl">
                  <Link to="/dashboard" className="w-full mx-auto">
                    <img
                      src="/images/qr-code.png"
                      className="w-full mx-auto"
                      alt=""
                    />
                  </Link>
                </div>
              </main>

              {/* <Icons.blobWhite className="absolute bottom-[-40%] -z-20 right-0 translate-x-[54%] w-[308px]" /> */}

              <Icons.blob className="absolute bottom-[16%] right-0 translate-x-[50%] w-[100px] rotate-[-6deg] -z-20 drop-shadow-[0_0_4rem_#45DC9C]" />

              <Icons.blob className="absolute top-[10%] -z-20 left-0 -translate-x-[56%] w-[108px] rotate-[240deg]" />
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}
