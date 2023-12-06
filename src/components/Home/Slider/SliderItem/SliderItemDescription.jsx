
const SliderItemDescription = ({ description }) => {
    return (
        <div
        className="tp-caption tp-resizeme textRes"
        data-x="['left','left','center','center']"
        data-hoffset="['0']"
        data-y="['middle']"
        data-voffset="['17','17','50','40']"
        data-fontsize="['24','20','18','18']"
        data-fontweight="400"
        data-lineheight="['36','32','30','28']"
        data-width="['570','500','500','100%']"
        data-height="['auto']"
        data-whitesapce="['normal']"
        data-color="['#666666']"
        data-type="text"
        data-responsive_offset="off"
        data-frames='[{"delay":2000,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                           {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
        data-textalign="['left','left','center','center']"
        data-paddingtop="[0,0,0,0]"
        data-paddingright="[0,0,0,20]"
        data-paddingbottom="[0,0,0,0]"
        data-paddingleft="[0,0,0,20]"
        style={{ zIndex: "5", whiteSpace: "normal", textTransform: "none" }}
      >
        {description}
      </div>
    );
  };

  export default SliderItemDescription;
