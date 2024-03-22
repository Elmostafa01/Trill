import clsx from "clsx";
import { ToggleTheme } from '@/src/theme/ToggleTheme'
import { Rock_Salt } from "next/font/google";


const rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export const Header = async () => {

  return (
    <header className='border-b border-b-accent'>
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className={clsx(rock.className, 'text-2xl font-bold mr-auto select-none	')}>Trill</h2>
        <ToggleTheme />
      </div>
    </header>
  )
}

