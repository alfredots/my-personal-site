import { novaSquare } from '@styles/fonts'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-center py-2 lg:py-4">
      <h1 className={novaSquare.className + ' text-4xl text-white lg:text-5xl'}>
        ALFREDO<span className="text-red-500">TS</span>
      </h1>
    </header>
  )
}
