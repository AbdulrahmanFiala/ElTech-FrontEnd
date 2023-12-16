const ContactMap = () => {
  return (
    <div className="row mar-top-bottom">
      <div className="col-lg-12">
        <div className="goru_map grayscale">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13785.72594090215!2d31.3518568!3d31.0405864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db2a4a552a1%3A0x7acb65869f42f8f3!2sITI%20Mansoura%20Branch%20(New%20Building)!5e0!3m2!1sen!2seg!4v1234567890"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
