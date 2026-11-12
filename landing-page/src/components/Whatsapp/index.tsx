import { FaWhatsapp } from "react-icons/fa";

export default function WhatsButton() {
  return (
    <div className="bg-[#FF6B4A] w-max p-4 rounded-full fixed right-[20px] bottom-[160px]">
      <a href="">
        <FaWhatsapp size={24} color="#fff" />
      </a>
    </div>
  )
}