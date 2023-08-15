import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store";
import { fetchNasheeds, loadMoreNasheeds, setFilterQuery, setPageLimit } from "../../../redux/ducks/nasheedSlice";
import NasheedsList from "../../../components/styled/Nasheeds/NasheedsList";
import Filter from "../../../components/styled/Nasheeds/Filter";
import Button from "../../../components/styled/pages/detail/button";
import Spinner from "../../../components/styled/common/Spinner";

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
function debounce(callback: CallableFunction, delay = 500) {
    let timeout: number;
    return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

const List = () => {
    const dispatch = useDispatch();
    const { items: data, loading, error, next, query, loadMoreLoading } = useSelector((state: RootState) => state.nasheeds)

    useEffect(() => {
        dispatch(fetchNasheeds())
    }, [dispatch, query])

    const loadMore = () => {
        dispatch(loadMoreNasheeds())
    }

    const setQueryDebounce = debounce((query: string) => {
        dispatch(setFilterQuery(query))
    })

    const setFilter: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQueryDebounce(event.target.value)
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
            <Filter onChangeHandler={setFilter} query={query} />
            {error && <p>Oops an error occurred.</p>}
            {loading && <Spinner />}
            {!error && !loading && data && data.length === 0 && <p>No items found.</p>}
            {!loading && data && data.length > 0 &&
                <>
                    <NasheedsList dropdownLinks={dropdownLinks} data={data} />

                    {next && <Button
                        style={{ marginRight: "auto", marginTop: "2rem", borderRadius: "25rem", opacity: loadMoreLoading ? 0.7 : 1 }}
                        disabled={loadMoreLoading} onClick={loadMore}>
                        {loadMoreLoading ? "Loading..." : "Load more..."}
                    </Button>
                    }
                </>
            }
        </>
    )
}

export default List