//NPM Packages
import { useState, useEffect } from "react";

// Project files
import { readCollection } from "../scripts/fireStore";
import { onFail } from "../scripts/onFail";
import TitleCategory from "../components/TitleCategory";
import DashboardHero from "../components/DashboardHero";

export default function Dashboard() {
  // Local state
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const moviesPath = "titles/categories/movies";
  const seriesPath = "titles/categories/series";
  const docPath = "titles/categories/documentaries";
  const topTenPath = "titles/categories/top-ten";

  // Method
  useEffect(() => {
    async function loadData() {
      readCategory(moviesPath, setMovies);
      readCategory(seriesPath, setSeries);
      readCategory(docPath, setDocumentaries);
      readCategory(topTenPath, setTopTen);
      setStatus(1);
    }
    loadData();
  }, []);

  async function readCategory(path, setter) {
    const categoryData = await readCollection(path).catch(onLoadFail);
    if (categoryData) setter(categoryData);
  }

  function onLoadFail() {
    onFail();
    setStatus(2);
  }

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  return (
    <div>
      <DashboardHero />
      <TitleCategory category="Movies" list={movies} />
      <TitleCategory category="Series" list={series} />
      <TitleCategory category="Documentaries" list={documentaries} />
      <TitleCategory category="Top 10 in Sweden Today" list={topTen} />
    </div>
  );
}
