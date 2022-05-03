// import Image from "next/image";
// import Link from "next/link";
// import uno from "../public/slider/slider.webp";
// import dos from "../public/slider/slider2.jpg";
// import { Navigation, A11y, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// export const Slider = () => {
//   const shippingcompanies = [
//     {
//       id: 1,
//       image: uno,
//       name: "Hombre",
//     },
//     {
//       id: 2,
//       image: dos,
//       name: "Mujer",
//     }
//   ];

  

//   return (
//     <Swiper
//       modules={[Navigation, A11y, Autoplay]}
//       spaceBetween={0}
//       slidesPerView={1}
//       navigation
//       autoplay={{ delay: 5000 }}
//       rewind={true}
//     >
//       {shippingcompanies.map((company) => (
//         <SwiperSlide
//           key={company.id}
//         >
//           <Link href="/">
//             <a className="block relative w-40">
//               <Image
//                 src={company.image}
//                 layout="fill"
//                 alt={company.name}
//               ></Image>
//             </a>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
