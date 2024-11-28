import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export default function NavHeader() {
  const menu = [
    { title: 'Phim bộ', href: '/' },
    { title: 'Phim lẻ', href: '/' },
    { title: 'Shows', href: '/' },
    { title: 'Hoạt hình', href: '/' },
    {
      title: 'Thể loại',
      submenu: [
        { name: 'Hành động', href: '/hanh-dong' },
        { name: 'Kinh dị', href: '/kinh-di' },
        { name: 'Hài hước', href: '/hai-huoc' },
        { name: 'Tình cảm', href: '/tinh-cam' }
      ]
    },
    {
      title: 'Quốc gia',
      submenu: [
        { name: 'Việt Nam', href: '/viet-nam' },
        { name: 'Hàn Quốc', href: '/han-quoc' },
        { name: 'Mỹ', href: '/my' },
        { name: 'Nhật Bản', href: '/nhat-ban' }
      ]
    },
    { title: 'Sắp chiếu', href: '/' }
  ]

  const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
  >(({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href as string}
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  ))
  ListItem.displayName = 'ListItem'

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-x-3'>
        {menu.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger className='font-medium'>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                    {item.submenu.map((subItem, subIndex) => (
                      <ListItem
                        key={subIndex}
                        href={subItem.href}
                        title={subItem.name}
                        className='font-medium'
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} passHref>
                <NavigationMenuLink className='font-medium'>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
