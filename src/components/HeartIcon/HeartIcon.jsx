function HeartIcon({ filled = false, className = "" }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20.84 4.61C20.33 4.1 19.72 3.69 19.05 3.42C18.38 3.14 17.66 3 16.94 3C16.21 3 15.49 3.14 14.82 3.42C14.15 3.69 13.54 4.1 13.03 4.61L12 5.64L10.97 4.61C9.94 3.58 8.54 3 7.08 3C5.62 3 4.22 3.58 3.19 4.61C2.16 5.64 1.58 7.04 1.58 8.5C1.58 9.96 2.16 11.36 3.19 12.39L12 21.2L20.81 12.39C21.84 11.36 22.42 9.96 22.42 8.5C22.42 7.04 21.87 5.64 20.84 4.61Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HeartIcon;