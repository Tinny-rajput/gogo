export default function Page({ title, children }) {
  document.title = `${title} - GoGoMoviw`;

  return <>{children}</>;
}
