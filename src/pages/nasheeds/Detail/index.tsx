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
import { fetchNasheed, pauseCurrentPlaying, pushToPlayerQueue, removeSavedNasheedRequest, saveNasheedRequest, setCurrentPlaying } from "../../../redux/ducks/nasheedSlice";
import { RootState } from "../../../redux/store";
import { StyledDivIcons } from "../../../components/styled/Nasheeds/NasheedTd";
import StyledIcon from "../../../components/styled/common/form/StyledIcon";
import { MdQueueMusic } from "react-icons/md";
import { Nasheed } from "../../../types/nasheed-store";
import profile_default from "../../../assets/images/profile_default.svg"

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


    const handleAddToQueue = (nasheed: Nasheed | null) => {
        if (nasheed !== null) {
            dispatch(pushToPlayerQueue(nasheed))
        }
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
                <div>
                    <Title>{nasheed?.name}</Title>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={nasheed?.owner.image || profile_default} style={{ width: "50px", borderRadius: "100%" }} />
                        <span>Author: {`${nasheed?.owner.first_name} ${nasheed?.owner.last_name}`}</span>
                    </div>
                </div>
                {isCurrentlyPlaying ?
                    <Button onClick={pauseCurrentPlayingNasheed} disabled={!nasheed?.audio}><FaPause /> Pause</Button>
                    :
                    <Button onClick={setCurrentPlayingNasheed} disabled={!nasheed?.audio}><FaPlay /> Play</Button>
                }
                <StyledDivIcons onClick={() => handleAddToQueue(nasheed)}>
                    <StyledIcon>
                        Add to Queue
                        <MdQueueMusic size={20} />
                    </StyledIcon>
                </StyledDivIcons>
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