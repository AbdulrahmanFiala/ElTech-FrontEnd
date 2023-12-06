const ContactMap = () => {
  return (
    <div className="row mar-top-bottom">
      <div className="col-lg-12">
        <div className="goru_map grayscale">
          <iframe
            src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
