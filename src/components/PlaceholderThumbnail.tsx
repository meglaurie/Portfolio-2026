
interface PlaceholderThumbnailProps {
  title?: string;
}

function PlaceholderThumbnail({ title = "Case Study" }: PlaceholderThumbnailProps) {
  return (
    <div className="thumb-wrap">
      <div className="thumb-shine" />

      {/* decorative stars */}
      <span className="thumb-star star-1">✦</span>
      <span className="thumb-star star-2">✦</span>

      {/* 90s folder icon built from divs */}
      <div className="thumb-folder">
        <div className="thumb-folder-tab" />
        <div className="thumb-folder-body">
          <div className="thumb-folder-line" />
          <div className="thumb-folder-line short" />
        </div>
      </div>

      {title && <p className="thumb-label">{title}</p>}
    </div>
  );
}

export default PlaceholderThumbnail;
