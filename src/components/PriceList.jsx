function PriceList(props) {
  return (
    <div className={`pb price-list ${props.className}`}>
      <span className="price-list__pdf-circle">Pdf</span>
      <a
        className="price-list__download"
        href="./assets/images/logo.png"
        download
      >
        Скачать прайс-лист
      </a>
    </div>
  );
}

export default PriceList;
