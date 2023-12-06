const SliderItemImage = ({ image }) => {
	return (
		<div
			className="tp-caption tp-resizeme slider-image"
			data-x="['right','right','center','center']"
			data-hoffset="['-50','50','0','0']"
			data-y="['middle']"
			data-voffset="['0']"
			data-width="['auto','350','auto','auto']"
			data-height="['auto']"
			data-type="image"
			data-responsive_offset="off"
			data-frames='[{"delay":3500,"speed":2500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
			data-textalign="center"
			data-paddingtop="[0,0,0,0]"
			data-paddingright="[0,0,0,25]"
			data-paddingbottom="[0,0,0,0]"
			data-paddingleft="[0,0,0,25]"
			style={{ zIndex: "5" }}
		>
			<img
				src={image}
				alt=""
				style={{ maxWidth: "600px", maxHeight: "520px" }}
			/>
		</div>
	);
};

export default SliderItemImage;
