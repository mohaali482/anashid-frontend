import { AiFillSave } from "react-icons/ai";
import Container from "../../../components/styled/pages/account/Container";
import Button from "../../../components/styled/pages/detail/button";
import Description from "../../../components/styled/pages/detail/description";
import Footer from "../../../components/styled/pages/detail/footer";
import FlexDiv from "../../../components/styled/pages/detail/header";
import NasheedImage from "../../../components/styled/pages/detail/image";
import Title from "../../../components/styled/pages/detail/title";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNasheed } from "../../../redux/ducks/nasheedSlice";
import { RootState } from "../../../redux/store";

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const nasheedId = Number(id)

    const { nasheed } = useSelector((state: RootState) => state.nasheeds)

    useEffect(() => {
        dispatch(fetchNasheed(nasheedId))
    }, [dispatch, nasheedId])

    return (
        <Container>
            <FlexDiv>
                <NasheedImage src={nasheed?.poster} alt={nasheed?.name} />
                <Title>{nasheed?.name}</Title>
                <Button><FaPlay /> Play</Button>
            </FlexDiv>
            <Description>
                <Title>About</Title>
                {nasheed?.description}
            </Description>
            <Footer>
                <Button><AiFillSave /> Save to my playlist</Button>
            </Footer>
        </Container>
    )
}

export default Detail;