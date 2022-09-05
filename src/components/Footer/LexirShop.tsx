import Link from 'next/link';

export default function LexirShop() {
  return (
    <div className="flex flex-col ">
    <h3 className="text-lightGray2 text-base leading-10 font-regular">
      LEXIR SHOP
    </h3>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Brands 
      </a>
    </Link>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Spirits
      </a>
    </Link>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Wine
      </a>
    </Link>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Block
      </a>
    </Link>
  </div>
  )
}