export const ImagesList = ({ images }) => {
    return (
        <div className="images-container">
            {images.map(image => {
                return (
                    <img width={image.previewWidth} height={image.previewHeight} src={image.previewURL} key={image.id} />
                )
            })}
        </div>
    )
}
