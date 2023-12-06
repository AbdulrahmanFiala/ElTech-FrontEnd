import { Link } from "react-router-dom";

const SliderItemButton = ({ id }) => {
	return (
		<div
			className="tp-caption tp-resizeme textRes"
			data-x="['left','left','center','center']"
			data-hoffset="['0']"
			data-y="['middle']"
			data-voffset="['145','145','150','145']"
			data-fontsize="14"
			data-fontweight="700"
			data-lineheight=".8"
			data-width="['auto']"
			data-height="['auto']"
			data-whitesapce="['normal']"
			data-color="['#FFF']"
			data-type="text"
			data-responsive_offset="off"
			data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},
                           {"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
			data-textalign="center"
			data-paddingtop="[0,0,0,0]"
			data-paddingright="[0,0,0,20]"
			data-paddingbottom="[0,0,0,0]"
			data-paddingleft="[0,0,0,20]"
			style={{
				zIndex: 5,
			}}
		>
			<Link to={`/product/${id}`} className="goru-btn">
				see more
			</Link>
		</div>
	);
};

export default SliderItemButton;
