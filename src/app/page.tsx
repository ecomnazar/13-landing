import { Container } from "@/shared/ui/Container"
import { Flex } from "@/shared/ui/Flex";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="bg-primary w-full py-3">
          <Container>
            <Flex className="gap-x-8">
              <h2 className="text-[24px] font-semibold">13lik</h2>
              <ul>
                <Flex className="gap-x-4">
                  <li>Perfumes</li>
                  <li>Beauty</li>
                </Flex>
              </ul>
            </Flex>
          </Container>
        </nav>
        <Container className="!max-w-[1300px] mt-8">
          <div className="h-[700px] w-full relative">
            <Image src={'/MainBanner.png'} fill alt="Banner" />
          </div>
          <div className="relative h-[20px] mt-8 w-[80%] mx-auto">
            <Image src={'/Brands.webp'} fill alt="Brands" />
          </div>
          <p className="text-primary text-[18px] text-center mt-10">And many more luxury brands to choose.</p>
        </Container>
      </header>
      <main className="my-16">
        <section>
          <Container>
            <h3 className="text-primary text-center text-[36px] font-bold">HERE IS HOW IT WORKS:</h3>
            <div className="grid grid-cols-4 gap-8 mt-10">
              <div className="h-[200px] bg-primary"></div>
              <div className="h-[200px] bg-primary"></div>
              <div className="h-[200px] bg-primary"></div>
              <div className="h-[200px] bg-primary"></div>
            </div>
          </Container>
        </section>

        <section className="mt-24 mb-16">
          <Container className="">
            <h3 className="text-primary mx-auto text-center text-[36px] font-bold max-w-[700px]">SELECT WHAT YOU WOULD LIKE TO TRY FROM OUR BEST SELLERS</h3>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div className="h-[550px] bg-primary"></div>
              <div className="h-[550px] bg-primary"></div>
              <div className="h-[550px] bg-primary"></div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="h-[450px] w-full relative">
              <Image src={'/FooterBanner.png'} fill alt="Banner" />
            </div>
          </Container>
        </section>
      </main>

      <footer className="bg-primary py-16">
        <Container>
          <Flex className="!items-start" enableJustifyBetween>
            <Flex className="gap-x-4">
              <Image src={'/GooglePlayIcon.png'} width={170} height={50} alt="Google Play" />
              <Image src={'/AppStoreIcon.png'} width={170} height={50} alt="Apple Store" />
            </Flex>
            <Flex className="gap-x-8">
              <Image src={'/InstagramIcon.svg'} width={50} height={50} alt="Instagram Icon" />
              <Image src={'/TikTokIcon.svg'} width={42} height={42} alt="Tik Tok Icon" />
              <Image src={'/CallIcon.svg'} width={42} height={42} alt="Tik Tok Icon" />
            </Flex>
            <div>
              <h4 className="text-secondary font-semibold mb-4">ABOUT SCENTBIRD</h4>
              <ul className="space-y-3">
                <li className="">Help & Support</li>
                <li className="">About us</li>
              </ul>
            </div>
          </Flex>
        </Container>
      </footer>
    </>
  );
}
