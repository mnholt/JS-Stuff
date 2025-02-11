export default function Root() {

  const pages = [
    "find duplicates",
    "differnce of sums",
  ];
  return (
    <>
      <div id="sidebar">
        <h1>React Router pagess</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search pagess"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/pages/findDuplicates`}>Find Duplicates</a>
            </li>
            <li>
              <a href={`/pages/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
