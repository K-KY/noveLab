import '../css/headerIcon.css'


const HeaderIcon = ({
                        onHeaderClick,
                        image,
                        alt = "logo",
                        width = 180,
                        height = "auto",
                    }) => {
    return (
        <div className="header-icon" onClick={onHeaderClick}>
            <img
                src={image}
                alt={alt}
                style={{
                    width,
                    height,
                    objectFit: "contain",
                    display: "block",
                }}
            />
        </div>
    );
};

export { HeaderIcon };