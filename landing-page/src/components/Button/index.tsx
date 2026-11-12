interface Buttons {
  text: string;
  text_color: string;
  fontsize: string;
  background: string;
  background_color: string;
  link: string;
}

export default function Button({
  text,
  text_color,
  fontsize,
  background,
  background_color,
  link
}: Buttons) {
  return (
    <>
      <a href={`${link}`}>
        <div className={`${background} ${background_color}`}>
          <p className={`${text} font-medium ${fontsize} ${text_color}`}>{text}</p>

        </div>
      </a>
    </>
  );
}
