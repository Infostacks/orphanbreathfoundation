import Head from "next/head";
import HomeComponent from "../components/Home";

export default function Home() {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // });

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  // };

  return (
    <>
      <Head>
        <title>Orphan Breath Foundation</title>
        <meta name="description" content="Orphan Breadth Foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-txtColor bg-bgColor pb-5">
        <HomeComponent />

        {/* <motion.div
          variants={variants}
          animate="default"
          transition={{ duration: 0.05 }}
          class="cursor"
          id="cursor"
        ></motion.div> */}
      </main>
    </>
  );
}
