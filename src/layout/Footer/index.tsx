import { Icon } from 'components/Icon'

export const Footer = () => {
  return (
    <footer className="flex h-[64px] items-center justify-center gap-4 bg-gray-800 text-red-500">
      <a href="https://www.instagram.com/garotocaos_/" target="_blank">
        <Icon type="instagram" size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/alfredo-tito-837429ba/"
        target="_blank"
      >
        <Icon type="linkedin" size={32} />
      </a>
      <a href="mailto:alfredtito97@gmail.com" target="_blank">
        <Icon type="email" size={32} />
      </a>
    </footer>
  )
}
