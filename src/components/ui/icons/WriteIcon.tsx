type PropTypes = {
  size?: number;
  color?: string;
};

export default function WriteIcon({ size = 26, color = "#98A0B0" }: PropTypes) {
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 26 26">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.25 12.188c0-4.214 0-6.32 1.309-7.63C5.868 3.25 7.974 3.25 12.187 3.25h1.626c4.213 0 6.32 0 7.628 1.309 1.309 1.309 1.309 3.415 1.309 7.628v1.626c0 4.213 0 6.32-1.309 7.628-1.309 1.309-3.415 1.309-7.628 1.309h-1.626c-4.213 0-6.32 0-7.628-1.309-1.309-1.309-1.309-3.415-1.309-7.628v-1.626Zm12.884-5.369a2.031 2.031 0 0 1 2.873 0l.215.216a2.031 2.031 0 0 1 0 2.872l-.805.805c-.563-.374-1.287-.98-1.962-1.635a14.23 14.23 0 0 1-1.238-1.34l.917-.918ZM13.773 9.18 7.41 15.543a1.016 1.016 0 0 0-.295.647l-.176 2.478a.406.406 0 0 0 .434.434l2.479-.176c.243-.017.473-.122.646-.295l6.46-6.46a18.564 18.564 0 0 1-1.916-1.634c-.45-.437-.902-.91-1.27-1.357Z"
      ></path>
    </svg>
  );
}
