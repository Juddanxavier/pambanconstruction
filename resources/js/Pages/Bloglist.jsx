import React from 'react'

export default function Blogdetail() {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState({
        page: 1,
  });
      const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
        (async () => {
            const arr = [];
            if (filter.page) {
                arr.push(`page=${filter.page}`);
            }
            await Axios.get(`/blogAll?${arr.join("&")}`)
                .then((res) => {
                    // setProjects([...projects, ...res.data.data]);
                    console.log(res.data.last_page);
                    setBlogs(
                        filter.page === 1
                            ? res.data.data
                            : [...[...blogs, ...res.data.data]]
                    );
                    setLastPage(res.data.last_page);
                    setIsLoading(true);
                })
                .catch((err) => console.error(err))
                .finally(
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000)
                );
        })();
    }, [filter]);
  return (
    <div>Blogdetail</div>
  )
}
