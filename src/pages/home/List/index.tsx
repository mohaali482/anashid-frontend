import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store";
import { fetchNasheeds, loadMoreNasheeds, setPageLimit } from "../../../redux/ducks/nasheedSlice";
import NasheedsList from "../../../components/styled/Nasheeds/NasheedsList";
import Filter from "../../../components/styled/Nasheeds/Filter";
import Button from "../../../components/styled/pages/detail/button";

// function List() {
//     const dispatch = useDispatch();
//     const { items, loading, error, next, previous, limit, loadMoreLoading } = useSelector((state: RootState) => state.nasheeds)
//     useEffect(() => {
//         dispatch(fetchNasheeds())
//     }, [dispatch])
//     if (error) {
//         return <p>Oops an error occurred.</p>
//     }
//     if (loading) {
//         return <p>Loading...</p>
//     }
//     return (
//         <div>
//             <p>Limit<input type="number" value={limit} onChange={(e) => e.target.valueAsNumber >= 0 ? dispatch(setPageLimit(e.target.valueAsNumber)) : null} /></p>
//             <button onClick={(e) => dispatch(fetchNasheeds())}>Query</button>
//             <p>Items</p>
//             <div>{items.map((item) => <p key={item.id}>{item.name}</p>)}</div>
//             {next ? (loadMoreLoading ? <p>Loading...</p> : <button onClick={() => { dispatch(loadMoreNasheeds()) }}>Load More</button>) : null}
//             {/* {next && <button onClick={() => { dispatch(fetchPageNasheeds('next')) }}>next</button>} */}
//             {/* {previous && <button onClick={() => { dispatch(fetchPageNasheeds('previous')) }}>previous</button>} */}
//             <Audio />
//         </div>
//     )
// }

const List = () => {
    const dispatch = useDispatch();
    const { items: data, loading, error, next, limit, query, loadMoreLoading } = useSelector((state: RootState) => state.nasheeds)
    useEffect(() => {
        dispatch(fetchNasheeds())
    }, [dispatch])
    const loadMore = () => {
        dispatch(loadMoreNasheeds())
    }
    if (error) {
        return <p>Oops an error occurred.</p>
    }
    if (loading) {
        return <p>Loading...</p>
    }

    const dropdownLinks = [
        {
            link: "/nasheeds/:id",
            text: "Detail",
        },
        {
            link: "/nasheeds/edit/:id",
            text: "Edit",
        },
    ]
    return (
        <>
            <Filter />
            <NasheedsList dropdownLinks={dropdownLinks} data={data} />

            {next && <Button
                style={{ marginRight: "auto", marginTop: "2rem", borderRadius: "25rem", opacity: loadMoreLoading ? 0.7 : 1 }}
                disabled={loadMoreLoading} onClick={loadMore}>
                {loadMoreLoading ? "Loading..." : "Load more..."}
            </Button>
            }
        </>
    )
}

export default List