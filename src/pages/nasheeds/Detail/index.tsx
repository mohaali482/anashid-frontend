import { AiFillSave } from "react-icons/ai";
import Container from "../../../components/styled/pages/account/Container";
import Button from "../../../components/styled/pages/detail/button";
import Description from "../../../components/styled/pages/detail/description";
import Footer from "../../../components/styled/pages/detail/footer";
import FlexDiv from "../../../components/styled/pages/detail/header";
import NasheedImage from "../../../components/styled/pages/detail/image";
import Title from "../../../components/styled/pages/detail/title";
import { FaPlay } from "react-icons/fa";

const Detail = () => {

    return (
        <Container>
            <FlexDiv>
                <NasheedImage src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="User Image" />
                <Title>Nasheed</Title>
                <Button><FaPlay /> Play</Button>
            </FlexDiv>
            <Description>
                <Title>About</Title>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum itaque eveniet veritatis, id voluptatibus fugiat velit. Eum qui nostrum facilis recusandae maxime neque dolorem odio expedita, facere iusto, ad atque.
            </Description>
            <Footer>
                <Button><AiFillSave /> Save to my playlist</Button>
            </Footer>
        </Container>
    )
}

export default Detail;