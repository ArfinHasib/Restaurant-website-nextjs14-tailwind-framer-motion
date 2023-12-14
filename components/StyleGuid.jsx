import Link from 'next/link';
import { Button } from './ui/button';

const StyleGuid = () => {
   return (
      <>
         {/* typography */}
         <div className='flex flex-col gap-y-4 p-24'>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Voluptatum minima in maiores dolore ratione autem obcaecati
               dolores culpa debitis, aut aperiam. Delectus dolores distinctio
               voluptate inventore, beatae quis. Tempora, voluptates.
            </p>
         </div>
         <div className='bg-black p-24 flex flex-col gap-y-4'>
            <Link href='/'>Link</Link>
            {/* Buttons */}
            <Button variant='default'>Button 1</Button>
            <Button variant='orange'>Button 2</Button>
            <Button variant='input'>Button 3</Button>
         </div>
      </>
   );
};

export default StyleGuid;
