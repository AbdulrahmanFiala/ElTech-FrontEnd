
const SliderItemTitle = ({ title }) => {
    return (
        <div
        className="tp-caption tp-resizeme textRes title-1"
        data-x="['left','left','center','center']"
        data-hoffset="['0']"
        data-y="['middle']"
        data-voffset="['-132','-110','-60','-70']"
        data-fontsize="['60','45','40','36']"
        data-fontweight="700"
        data-lineheight="['72','50','52','46']"
        data-width="['570','500','500','100%']"
        data-height="['auto']"
        data-whitesapce="['normal']"
        data-color="['#000000']"
        data-type="text"
        data-responsive_offset="on"
        data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                           {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
        data-textalign="['left','left','center','center']"
        data-paddingtop="[0,0,0,0]"
        data-paddingright="[0,0,0,20]"
        data-paddingbottom="[0,0,0,0]"
        data-paddingleft="[0,0,0,20]"
        style={{
          zIndex: "5",
          whiteSpace: "normal",
          textTransform: "none",
        }}
      >
        {/* {title} */}
        {title.length > 33 ? title.substring(0, 33) + '...' : title}
      </div>
    );
  };

  export default SliderItemTitle;
