import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store";
import { fetchNasheeds, loadMoreNasheeds, setPageLimit } from "../../../redux/ducks/nasheedSlice";
import NasheedsList from "../../../components/styled/Nasheeds/NasheedsList";

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
    return (
        <>
            <NasheedsList data={[{
                "id": 19,
                "owner": {
                    "id": 1,
                    "username": "hpi",
                    "first_name": "",
                    "last_name": "",
                    "email": "",
                    "image": null,
                    "date_joined": new Date("2023-04-04T07:25:37.514808Z")
                },
                "name": "Hello",
                "poster": "https://storage.googleapis.com/nasheeds-198d4.appspot.com/nasheeds/posters/white-picture-fotor-bg-remover-2023041810226.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-fxr94%40nasheeds-198d4.iam.gserviceaccount.com%2F20230528%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230528T044523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=3b722c95c9d10fa940fb5ae28c4276d95830b9a762908f8a48eab70f5d31f8f3b29c6f7ae6eb1fa005dcd874235c961a4cf99bb66d1bdb2075fa7e598eaf1e42096dbddc6acccfdb5b55fce6e2255b37e1878135b3cbe426acccdb7ffc250a87c165a01016d167d145b8a5bc80ec068fec64adb475245e0d63c4888ae752650d62267a007ec1e902623bc23ebb48709ef0d685f5584a0ed728fbf0421a6955f6119fe0ce2f486b070a642cd3bc266fb46614aac9a09893289297e8051f65beb73f9984f93e0c96c98137d92da2e1fd9233a248670b748c089d2c881f0e1e4219d71e020a55b5f602310392413bbf963859310349aee2c6823908bae26df6e60d",
                "audio": "https://storage.googleapis.com/nasheeds-198d4.appspot.com/nasheeds/audios/Free_Test_Data_2MB_MP3.mp3?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-fxr94%40nasheeds-198d4.iam.gserviceaccount.com%2F20230528%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230528T044523Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=0abc46aaa9a0277b3bf966664dcab86f110dd4843cb9d7abe3ab918ec4dbd1c7fdc79613581a08b973cc62d558d7a916923798bb17081e53077e1dbf289a84ede154a57e6cf23174c7a0c68f26b41d8891b93d881533914dad144766d548f629520390d9286515e35f67da746a5749598441af4579868d283dc7931227aa880ffbe441031caf9d60330692ccdd86633bf680d06ab14d2a5fa5de26c6c887096fd75589ecb9c9458c90b09f5da56e7ad5d8beb71eb433cc5e18d413cc09508939cce0686077403a5e5ec728cd70c9c03c32c84b8bff92844e318e04e24171bccdadfc0a675bd0939f369a19aa44900034afb89a7e52b5ba9d26be7a90c7286bb0",
                "created_at": new Date("2023-04-25T18:03:08.038130Z"),
                "updated_at": new Date("2023-04-25T18:03:08.038130Z")
            }]} />
        </>
    )
}

export default List