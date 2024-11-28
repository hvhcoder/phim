import NavHeader from '../nav/NavHeader'
import { ModeToggle } from '../ui/ModeToggle'

export default function Header() {
  return (
    <header className='sticky top-0 z-40 w-full flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] backdrop-blur bg-white/60 dark:bg-transparent'>
      <div className='max-w-8xl mx-auto'>
        <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='text-2xl mr-4'>Logo</div>
              <div className='w-60 h-10 rounded-2xl border-slate-200 border relative'>
                <input
                  type='text'
                  className='w-full h-full rounded-2xl p-2 bg-transparent focus:ring ring-blue-500/40 focus:outline-none dark:text-slate-400 dark:placeholder:text-slate-500'
                  placeholder='Tìm kiếm tên phim...'
                />
                <span className='absolute right-2 top-1/2 translate-y-[-50%] text-xl font-semibold dark:text-slate-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </span>
              </div>
            </div>
            <NavHeader></NavHeader>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
    </header>
  )
}
