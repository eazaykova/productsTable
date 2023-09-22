import styles from "./ImgLink.module.scss";

interface ImgLinkProps {
  src: string;
  alt: string;
}

const ImgLink = ({ src, alt }: ImgLinkProps) => {
  return (
    <a className={styles.link} href={src} target="_blank">
      <img src={src} alt={alt} />
    </a>
  );
};

export default ImgLink;
