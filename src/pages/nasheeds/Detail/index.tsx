import { AiFillSave, AiOutlineClose } from "react-icons/ai";
import Container from "../../../components/styled/pages/account/Container";
import Button from "../../../components/styled/pages/detail/button";
import Description from "../../../components/styled/pages/detail/description";
import Footer from "../../../components/styled/pages/detail/footer";
import FlexDiv from "../../../components/styled/pages/detail/header";
import NasheedImage from "../../../components/styled/pages/detail/image";
import Title from "../../../components/styled/pages/detail/title";
import { FaPause, FaPlay } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNasheed, pauseCurrentPlaying, removeSavedNasheedRequest, saveNasheedRequest, setCurrentPlaying } from "../../../redux/ducks/nasheedSlice";
import { RootState } from "../../../redux/store";

const Detail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const nasheedId = Number(id)

    const { nasheed, currentPlaying, currentPlayingPaused } = useSelector((state: RootState) => state.nasheeds)
    const { isLoggedIn } = useSelector((state: RootState) => state.user)

    const isCurrentlyPlaying = nasheed && currentPlaying !== null && currentPlaying.id === nasheed.id && !currentPlayingPaused

    const setCurrentPlayingNasheed = () => {
        if (nasheed) {
            dispatch(setCurrentPlaying(nasheed))
        }
    }

    const pauseCurrentPlayingNasheed = () => {
        dispatch(pauseCurrentPlaying(true))
    }

    const handleUnsaveNasheed = (id: number) => {
        if (!isLoggedIn) return navigate('/auth/login')
        dispatch(removeSavedNasheedRequest(id))
    }

    const handleSaveNasheed = (id: number) => {
        if (!isLoggedIn) return navigate('/auth/login')
        dispatch(saveNasheedRequest(id))
    }

    if (nasheed) {
        document.title = "Nasheed - " + nasheed.name
    }

    useEffect(() => {
        dispatch(fetchNasheed(nasheedId))
    }, [dispatch, nasheedId])

    return (
        <Container>
            <FlexDiv>
                <NasheedImage src={nasheed?.poster} alt={nasheed?.name} />
                <Title>{nasheed?.name}</Title>
                {isCurrentlyPlaying ?
                    <Button onClick={pauseCurrentPlayingNasheed} disabled={!nasheed?.audio}><FaPause /> Pause</Button>
                    :
                    <Button onClick={setCurrentPlayingNasheed} disabled={!nasheed?.audio}><FaPlay /> Play</Button>
                }
            </FlexDiv>
            <Description>
                <Title>About</Title>
                {nasheed?.description}
            </Description>
            <Footer>
                {
                    nasheed &&
                    (nasheed.saved_id !== undefined ?
                        <Button onClick={() => handleUnsaveNasheed(nasheed.saved_id!)}><AiOutlineClose /> Remove from my playlist</Button>
                        :
                        <Button onClick={() => handleSaveNasheed(nasheed.id)}><AiFillSave /> Save to my playlist</Button>
                    )
                }
            </Footer>
        </Container>
    )
}

export default Detail;