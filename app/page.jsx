import Hero from '@/components/Hero';
import StyleGuid from '@/components/StyleGuid';

export default function Home() {
   return (
      <main
         className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'
         id='root'
      >
         <Hero />
         {/* <StyleGuid /> */}
         <div className='h-[4000px]'></div>
      </main>
   );
}
