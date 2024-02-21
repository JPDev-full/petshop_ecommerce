import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HomeHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    {
      name: "Slide 1",
      description: "Descrição do Slide 1",
      image: "/images/racao.jpg",
    },
    {
      name: "Slide 2",
      description: "Descrição do Slide 2",
      image: "/images/shampoo.jpg",
    },
    // Adicione mais slides conforme necessário
  ];

  const renderSlides = () => {
    return items.map((item, index) => (
      <div key={index}>
        <img
          src={item.image}
          alt={item.name}
          style={{ maxWidth: "100%", maxHeight: "400px", margin: "0 auto" }}
        />
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          paragraph
        >
          {item.description}
        </Typography>
      </div>
    ));
  };

  return (
    <Container align="center" position="inherit" style={{ marginTop: "5rem" }}>
      <Typography variant="h2" align="center" color="text.primary" gutterBottom>
        Bem-vindo ao Pet Shop!
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Encontre os melhores produtos para o seu pet.
      </Typography>
      <Slider {...settings}>{renderSlides()}</Slider>
    </Container>
  );
}
