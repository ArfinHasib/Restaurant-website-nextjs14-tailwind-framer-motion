import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import StyleGuid from '@/components/StyleGuid';

export default function Home() {
   return (
      <main
         className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'
         id='root'
      >
         <Header />
         <Hero />
         <Menu />
         <Reservation />
         {/* <StyleGuid /> */}
         <div className='h-[4000px]'></div>
      </main>
   );
}
